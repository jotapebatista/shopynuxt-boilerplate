const { PrismaClient, Role, OrderStatus } = require('@prisma/client')
const bcrypt = require('bcrypt')

const prisma = new PrismaClient()

// Helper function to generate slug
function generateSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

async function main() {
  // Clear existing data
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.wishlistItem.deleteMany()
  await prisma.cartItem.deleteMany()
  await prisma.cart.deleteMany()
  await prisma.address.deleteMany()
  await prisma.user.deleteMany()
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()

  // Create categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: '3D Printers',
        slug: '3d-printers',
        description: 'Professional and hobbyist 3D printers'
      }
    }),
    prisma.category.create({
      data: {
        name: 'Filaments',
        slug: 'filaments',
        description: 'High-quality 3D printing filaments'
      }
    }),
    prisma.category.create({
      data: {
        name: 'Accessories',
        slug: 'accessories',
        description: '3D printing accessories and parts'
      }
    })
  ])

  // Create products
  const products = await Promise.all([
    // 3D Printers
    prisma.product.create({
      data: {
        name: 'Creality Ender 3 Pro',
        slug: 'creality-ender-3-pro',
        description: 'Professional-grade FDM 3D printer with magnetic build plate and improved power supply',
        price: 299.99,
        stock: 50,
        categoryId: categories[0].id,
        images: [
          'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=600&q=80'
        ],
        specifications: {
          buildVolume: '220x220x250mm',
          layerResolution: '0.1mm',
          printSpeed: '180mm/s',
          features: ['Magnetic Build Plate', 'Meanwell Power Supply', 'Silent Stepper Motors']
        }
      }
    }),
    prisma.product.create({
      data: {
        name: 'Prusa i3 MK3S+',
        slug: 'prusa-i3-mk3s-plus',
        description: 'Premium FDM 3D printer with automatic bed leveling and filament sensor',
        price: 799.99,
        stock: 30,
        categoryId: categories[0].id,
        images: [
          'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=600&q=80'
        ],
        specifications: {
          buildVolume: '250x210x210mm',
          layerResolution: '0.05mm',
          printSpeed: '200mm/s',
          features: ['Automatic Bed Leveling', 'Filament Sensor', 'Power Panic Recovery']
        }
      }
    }),
    prisma.product.create({
      data: {
        name: 'Elegoo Mars 3',
        slug: 'elegoo-mars-3',
        description: 'High-resolution MSLA 3D printer for detailed prints',
        price: 299.99,
        stock: 40,
        categoryId: categories[0].id,
        images: [
          'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=600&q=80'
        ],
        specifications: {
          buildVolume: '143x89x175mm',
          layerResolution: '0.035mm',
          screenResolution: '4K',
          features: ['UV LED Matrix', 'Air Filtration', 'Tilted LCD Screen']
        }
      }
    }),
    // Filaments
    prisma.product.create({
      data: {
        name: 'PLA Filament - 1kg Spool',
        slug: 'pla-filament-1kg',
        description: 'High-quality PLA filament for general purpose printing',
        price: 24.99,
        stock: 100,
        categoryId: categories[1].id,
        images: [
          'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=600&q=80'
        ],
        specifications: {
          material: 'PLA',
          diameter: '1.75mm',
          weight: '1kg',
          colors: ['Black', 'White', 'Red', 'Blue', 'Green']
        }
      }
    }),
    prisma.product.create({
      data: {
        name: 'PETG Filament - 1kg Spool',
        slug: 'petg-filament-1kg',
        description: 'Durable PETG filament for functional parts',
        price: 29.99,
        stock: 80,
        categoryId: categories[1].id,
        images: [
          'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=600&q=80'
        ],
        specifications: {
          material: 'PETG',
          diameter: '1.75mm',
          weight: '1kg',
          colors: ['Black', 'White', 'Transparent']
        }
      }
    }),
    prisma.product.create({
      data: {
        name: 'TPU Filament - 1kg Spool',
        slug: 'tpu-filament-1kg',
        description: 'Flexible TPU filament for rubber-like prints',
        price: 34.99,
        stock: 60,
        categoryId: categories[1].id,
        images: [
          'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=600&q=80'
        ],
        specifications: {
          material: 'TPU',
          diameter: '1.75mm',
          weight: '1kg',
          shoreHardness: '95A',
          colors: ['Black', 'White', 'Red', 'Blue']
        }
      }
    }),
    // Accessories
    prisma.product.create({
      data: {
        name: '3D Printer Tool Kit',
        slug: '3d-printer-tool-kit',
        description: 'Essential tools for 3D printing maintenance and post-processing',
        price: 49.99,
        stock: 75,
        categoryId: categories[2].id,
        images: [
          'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=600&q=80'
        ],
        specifications: {
          contents: [
            'Spatula',
            'Wire Cutters',
            'Hex Keys',
            'Nozzle Cleaning Kit',
            'Calibration Tools'
          ],
          material: 'Steel and Plastic',
          case: 'Included'
        }
      }
    }),
    prisma.product.create({
      data: {
        name: 'Build Plate Adhesive',
        slug: 'build-plate-adhesive',
        description: 'Special adhesive for better first layer adhesion',
        price: 14.99,
        stock: 120,
        categoryId: categories[2].id,
        images: [
          'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=600&q=80'
        ],
        specifications: {
          volume: '100ml',
          type: 'Liquid',
          compatibleMaterials: ['PLA', 'PETG', 'ABS'],
          application: 'Spray'
        }
      }
    }),
    prisma.product.create({
      data: {
        name: 'Nozzle Set - 0.4mm',
        slug: 'nozzle-set-0-4mm',
        description: 'Set of brass nozzles for FDM printers',
        price: 19.99,
        stock: 90,
        categoryId: categories[2].id,
        images: [
          'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=600&q=80'
        ],
        specifications: {
          material: 'Brass',
          diameter: '0.4mm',
          quantity: '5 pieces',
          thread: 'M6'
        }
      }
    }),
	prisma.product.create({
		data: {
		  name: 'Anycubic Photon Mono X 6K',
		  slug: 'anycubic-photon-mono-x-6k',
		  description: 'Large-format MSLA resin printer with 6K resolution for ultra-fine detail',
		  price: 599.99,
		  stock: 25,
		  categoryId: categories[0].id,
		  images: [
			'https://images.unsplash.com/photo-1618832743907-d7688f61dfc7?auto=format&fit=crop&w=600&q=80',
			'https://images.unsplash.com/photo-1618832743907-d7688f61dfc7?auto=format&fit=crop&w=600&q=80'
		  ],
		  specifications: {
			buildVolume: '197x122x245mm',
			layerResolution: '0.01mm',
			screenResolution: '6K',
			features: ['Fast Curing', 'Large Build Plate', 'Air Purification System']
		  }
		}
	  }),
	  prisma.product.create({
		data: {
		  name: 'ABS Filament - 1kg Spool',
		  slug: 'abs-filament-1kg',
		  description: 'High-temperature ABS filament for strong mechanical parts',
		  price: 27.99,
		  stock: 70,
		  categoryId: categories[1].id,
		  images: [
			'https://images.unsplash.com/photo-1607869599833-324e1c9ac7eb?auto=format&fit=crop&w=600&q=80',
			'https://images.unsplash.com/photo-1607869599833-324e1c9ac7eb?auto=format&fit=crop&w=600&q=80'
		  ],
		  specifications: {
			material: 'ABS',
			diameter: '1.75mm',
			weight: '1kg',
			colors: ['Black', 'White', 'Gray']
		  }
		}
	  }),
	  prisma.product.create({
		data: {
		  name: 'Wash & Cure Station 2.0',
		  slug: 'wash-cure-station-2',
		  description: 'All-in-one post-processing station for resin prints',
		  price: 129.99,
		  stock: 40,
		  categoryId: categories[2].id,
		  images: [
			'https://images.unsplash.com/photo-1621943857243-0e0e0dff7743?auto=format&fit=crop&w=600&q=80',
			'https://images.unsplash.com/photo-1621943857243-0e0e0dff7743?auto=format&fit=crop&w=600&q=80'
		  ],
		  specifications: {
			mode: ['Wash', 'Cure'],
			compatibility: 'Most MSLA printers',
			features: ['360° UV Curing', 'Sealed Washing Container', 'Touch Controls']
		  }
		}
	  }),
	  prisma.product.create({
		data: {
		  name: 'Resin - Standard Photopolymer (Grey)',
		  slug: 'resin-standard-grey',
		  description: 'Standard resin for high-detail models in a neutral grey color',
		  price: 35.99,
		  stock: 65,
		  categoryId: categories[1].id,
		  images: [
			'https://images.unsplash.com/photo-1625821767093-566d0050ad91?auto=format&fit=crop&w=600&q=80',
			'https://images.unsplash.com/photo-1625821767093-566d0050ad91?auto=format&fit=crop&w=600&q=80'
		  ],
		  specifications: {
			material: 'Photopolymer Resin',
			volume: '1L',
			color: 'Grey',
			compatiblePrinters: ['MSLA', 'DLP']
		  }
		}
	  }),
	  prisma.product.create({
		data: {
		  name: 'Creality Sonic Pad',
		  slug: 'creality-sonic-pad',
		  description: 'Klipper-based touchscreen controller for enhanced 3D printing performance',
		  price: 159.99,
		  stock: 35,
		  categoryId: categories[2].id,
		  images: [
			'https://images.unsplash.com/photo-1672147663833-832fa66f92a4?auto=format&fit=crop&w=600&q=80',
			'https://images.unsplash.com/photo-1672147663833-832fa66f92a4?auto=format&fit=crop&w=600&q=80'
		  ],
		  specifications: {
			screenSize: '7 inch',
			OS: 'Klipper',
			compatibility: ['Creality Ender Series', 'Other Klipper-compatible printers'],
			features: ['Input Shaping', 'Remote Monitoring', 'Fast Slicing']
		  }
		}
	  }),
	  prisma.product.create({
		data: {
		  name: 'Hardened Steel Nozzle - 0.6mm',
		  slug: 'hardened-steel-nozzle-0-6mm',
		  description: 'Abrasion-resistant nozzle for printing with composites and abrasive filaments',
		  price: 24.99,
		  stock: 50,
		  categoryId: categories[2].id,
		  images: [
			'https://images.unsplash.com/photo-1672068409583-282e2f8e170e?auto=format&fit=crop&w=600&q=80',
			'https://images.unsplash.com/photo-1672068409583-282e2f8e170e?auto=format&fit=crop&w=600&q=80'
		  ],
		  specifications: {
			material: 'Hardened Steel',
			diameter: '0.6mm',
			temperatureResistance: 'Up to 500°C',
			useCase: ['Carbon Fiber', 'Glow-in-the-Dark', 'Metal-fill']
		  }
		}
	  }),
	  prisma.product.create({
		data: {
		  name: 'Magnetic PEI Build Plate - 235x235mm',
		  slug: 'pei-build-plate-235x235',
		  description: 'Flexible PEI-coated build surface for excellent adhesion and easy part removal',
		  price: 39.99,
		  stock: 45,
		  categoryId: categories[2].id,
		  images: [
			'https://images.unsplash.com/photo-1660325988054-6f7b103d2f18?auto=format&fit=crop&w=600&q=80',
			'https://images.unsplash.com/photo-1660325988054-6f7b103d2f18?auto=format&fit=crop&w=600&q=80'
		  ],
		  specifications: {
			size: '235x235mm',
			surface: 'PEI Coated',
			compatibility: ['Ender 3 Series', 'Any 235x235mm heated bed'],
			features: ['Spring Steel', 'Magnetic Base']
		  }
		}
	  })
  
  ])

  // Create users
  const adminPassword = await bcrypt.hash('jotape1795', 10)
  const userPassword = await bcrypt.hash('jotape1795', 10)

  const users = await Promise.all([
    // Admin user
    prisma.user.create({
      data: {
        email: 'joao-oliveirabatista@hotmail.com',
      password: adminPassword,
      firstName: 'Admin',
      lastName: 'User',
        role: Role.ADMIN,
        isActive: true
      }
    }),
    // Regular user
    prisma.user.create({
      data: {
        email: 'joao.batista@brightstuff.pt',
        password: userPassword,
        firstName: 'João',
        lastName: 'Batista',
        role: Role.USER,
      isActive: true
      }
    })
  ])

  // Create addresses for regular user
  const addresses = await Promise.all([
    prisma.address.create({
      data: {
        userId: users[1].id,
        firstName: users[1].firstName,
        lastName: users[1].lastName,
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'USA',
        isDefault: true
      }
    }),
    prisma.address.create({
      data: {
        userId: users[1].id,
        firstName: users[1].firstName,
        lastName: users[1].lastName,
        street: '456 Park Ave',
        city: 'New York',
        state: 'NY',
        zipCode: '10022',
        country: 'USA',
        isDefault: false
      }
    })
  ])

  // Create cart for regular user
  await prisma.cart.create({
    data: {
      userId: users[1].id,
      items: {
        create: [
          {
            productId: products[0].id,
            quantity: 1
          },
          {
            productId: products[3].id,
            quantity: 2
          }
        ]
      }
    }
  })

  // Create wishlist for regular user
  const wishlist = await prisma.wishlist.create({
    data: {
      userId: users[1].id
    }
  })

  await Promise.all([
    prisma.wishlistItem.create({
      data: {
        wishlistId: wishlist.id,
        productId: products[1].id
      }
    }),
    prisma.wishlistItem.create({
      data: {
        wishlistId: wishlist.id,
        productId: products[4].id
      }
    })
  ])

  // Create orders for regular user
  await Promise.all([
    // Completed order
    prisma.order.create({
      data: {
        user: { connect: { id: users[1].id } },
        status: OrderStatus.DELIVERED,
        total: 349.97,
        shippingAddress: { connect: { id: addresses[0].id } },
        paymentMethod: 'credit_card',
        items: {
          create: [
            {
              productId: products[0].id,
              quantity: 1,
              price: 299.99
            },
            {
              productId: products[3].id,
              quantity: 2,
              price: 24.99
            }
          ]
        }
      }
    }),
    // Pending order
    prisma.order.create({
      data: {
        user: { connect: { id: users[1].id } },
        status: OrderStatus.PENDING,
        total: 49.99,
        shippingAddress: { connect: { id: addresses[1].id } },
        paymentMethod: 'paypal',
        items: {
          create: [
            {
              productId: products[6].id,
              quantity: 1,
              price: 49.99
            }
          ]
        }
      }
    })
  ])

  console.log('Database has been seeded. 🌱')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 