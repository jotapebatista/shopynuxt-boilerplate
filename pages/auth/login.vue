<template>
	<div
		class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
	>
		<div class="max-w-md w-full space-y-8">
			<div>
				<h2
					class="mt-6 text-center text-3xl font-extrabold text-gray-900"
				>
					{{ isAdmin ? "Admin Login" : "Sign in to your account" }}
				</h2>
			</div>
			<form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
				<div class="rounded-md shadow-sm -space-y-px">
					<div>
						<label for="email" class="sr-only">Email address</label>
						<input
							id="email"
							v-model="form.email"
							name="email"
							type="email"
							required
							class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Email address"
						/>
					</div>
					<div>
						<label for="password" class="sr-only">Password</label>
						<input
							id="password"
							v-model="form.password"
							name="password"
							type="password"
							required
							class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Password"
						/>
					</div>
				</div>

				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<input
							id="remember-me"
							v-model="rememberMe"
							name="remember-me"
							type="checkbox"
							class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
						/>
						<label
							for="remember-me"
							class="ml-2 block text-sm text-gray-900"
						>
							Remember me
						</label>
					</div>
				</div>

				<div>
					<button
						type="submit"
						:disabled="loading"
						class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						<span v-if="loading">Loading...</span>
						<span v-else>Sign in</span>
					</button>
				</div>

				<div v-if="error" class="text-red-500 text-sm text-center">
					{{ error }}
				</div>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "~/stores/auth";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

const form = ref({ email: "", password: "" });
const rememberMe = ref(false);
const loading = ref(false);
const error = ref(null);

const isAdmin = computed(() => route.query.admin === "1");

const handleSubmit = async () => {
	try {
		loading.value = true;
		error.value = null;

		const response = await $fetch("/api/auth/login", {
			method: "POST",
			body: {
				email: form.value.email,
				password: form.value.password,
			},
		});

		authStore.setAuth(response.token, response.user);

		if (route.query.admin === "1") {
			if (authStore.isAdmin) {
				navigateTo("/admin");
			} else {
				error.value = "You do not have admin privileges";
				authStore.clearAuth();
			}
		} else {
			navigateTo("/");
		}
	} catch (err: any) {
		error.value = err.message || "An error occurred during login";
	} finally {
		loading.value = false;
	}
};
</script>
