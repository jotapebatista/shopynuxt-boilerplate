import { defineStore } from "pinia";

interface User {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	role: string;
}

interface AuthState {
	token: string | null;
	user: User | null;
	isAuthenticated: boolean;
}

export const useAuthStore = defineStore("auth", {
	state: (): AuthState => ({
		token: null,
		user: null,
		isAuthenticated: false,
	}),

	getters: {
		isAdmin: (state) => state.user?.role === "ADMIN",
		fullName: (state) =>
			state.user ? `${state.user.firstName} ${state.user.lastName}` : "",
	},

	actions: {
		setAuth(token: string, user: User) {
			this.$patch({
				token,
				user,
				isAuthenticated: true
			})
		},

		clearAuth() {
			this.$patch({
				token: null,
				user: null,
				isAuthenticated: false
			})
		},

		async initialize() {
			if (process.client) {
				const cookie = useCookie('auth_token')
				if (cookie.value) {
					try {
						const response = await fetch("/api/auth/validate", {
							method: 'GET',
							headers: {
								'Authorization': `Bearer ${cookie.value}`,
								'Content-Type': 'application/json'
							}
						})
						
						if (!response.ok) {
							throw new Error('Token validation failed')
						}

						const user = await response.json()
						this.setAuth(cookie.value, user)
						return true
					} catch (error) {
						this.clearAuth()
						return false
					}
				}
			}
			return false
		},

		async validateToken() {
			if (!this.token) {
				this.clearAuth()
				return false
			}

			try {
				const response = await fetch("/api/auth/validate", {
					method: 'GET',
					headers: {
						'Authorization': `Bearer ${this.token}`,
						'Content-Type': 'application/json'
					}
				})
				
				if (!response.ok) {
					throw new Error('Token validation failed')
				}

				const user = await response.json()
				this.setAuth(this.token, user)
				return true
			} catch (error) {
				this.clearAuth()
				return false
			}
		},

		async fetchUserProfile() {
			if (!this.token) {
				this.clearAuth()
				return null
			}

			try {
				const response = await fetch("/api/users/me", {
					method: 'GET',
					headers: {
						'Authorization': `Bearer ${this.token}`,
						'Content-Type': 'application/json'
					}
				})
				
				if (!response.ok) {
					throw new Error('Failed to fetch user profile')
				}

				const user = await response.json()
				this.setAuth(this.token, user)
				return user
			} catch (error) {
				this.clearAuth()
				return null
			}
		},

		async logout() {
			if (!this.token) {
				this.clearAuth()
				return
			}

			try {
				await fetch("/api/auth/logout", {
					method: 'POST',
					headers: {
						'Authorization': `Bearer ${this.token}`,
						'Content-Type': 'application/json'
					}
				})
			} finally {
				this.clearAuth()
			}
		}
	},
});
