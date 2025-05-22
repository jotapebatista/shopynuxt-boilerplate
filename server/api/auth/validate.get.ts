import { defineEventHandler, getRequestHeader, createError } from "#imports";
import { verifyToken } from "~/server/utils/jwt";
import { prisma } from "~/server/utils/prisma";

export default defineEventHandler(async (event) => {
	try {
		const authHeader = getRequestHeader(event, "Authorization");
		
		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			throw createError({
				statusCode: 401,
				message: "No token provided",
			});
		}

		const token = authHeader.split(" ")[1];
		const decoded = verifyToken(token);

		if (!decoded) {
			throw createError({
				statusCode: 401,
				message: "Invalid token",
			});
		}

		// Check if user still exists
		const user = await prisma.user.findUnique({
			where: { id: decoded.id },
			select: {
				id: true,
				email: true,
				firstName: true,
				lastName: true,
				role: true
			},
		});

		if (!user) {
			throw createError({
				statusCode: 401,
				message: "User not found",
			});
		}

		return user;
	} catch (error: any) {
		throw createError({
			statusCode: 401,
			message: error.message || "Invalid token",
		});
	}
});
