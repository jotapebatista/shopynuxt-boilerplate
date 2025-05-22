import { v2 as cloudinary } from 'cloudinary'
import { getCookie } from 'h3'

interface CloudinaryUploadResult {
  secure_url: string
  public_id: string
}

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export default defineEventHandler(async (event) => {
  try {
    // Check authentication
    const token = getCookie(event, 'auth_token')
    if (!token) {
      throw createError({
        statusCode: 401,
        message: 'Unauthorized'
      })
    }

    // Validate token and check admin role
    const response = await $fetch('/api/auth/validate', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    if (!response || response.role !== 'ADMIN') {
      throw createError({
        statusCode: 403,
        message: 'Unauthorized'
      })
    }

    // Get the uploaded file
    const formData = await readMultipartFormData(event)
    if (!formData || !formData[0]) {
      throw createError({
        statusCode: 400,
        message: 'No file uploaded'
      })
    }

    const file = formData[0]
    if (!file.type?.startsWith('image/')) {
      throw createError({
        statusCode: 400,
        message: 'File must be an image'
      })
    }

    // Convert buffer to base64
    const base64Image = file.data.toString('base64')
    const dataURI = `data:${file.type};base64,${base64Image}`

    // Upload to Cloudinary
    const result = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
      cloudinary.uploader.upload(dataURI, {
        folder: 'shopynuxt/products',
        resource_type: 'auto'
      }, (error, result) => {
        if (error) reject(error)
        else resolve(result as CloudinaryUploadResult)
      })
    })

    return {
      url: result.secure_url,
      publicId: result.public_id
    }
  } catch (error) {
    console.error('Error uploading image:', error)
    throw createError({
      statusCode: 500,
      message: 'Error uploading image'
    })
  }
}) 