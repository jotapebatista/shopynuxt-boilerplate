<template>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-background">
		<div class="sm:flex sm:items-center">
			<div class="sm:flex-auto">
				<h1 class="text-2xl font-semibold text-primary">Products</h1>
				<p class="mt-2 text-sm text-gray-700 dark:text-gray-300">
					A list of all products in your application including their
					name, category, price, and stock.
				</p>
			</div>
			<div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
				<button
					type="button"
					@click="openAddProductModal"
					class="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto transition-colors"
				>
					Add product
				</button>
			</div>
		</div>

		<!-- Search and Filter -->
		<div class="mt-8 flex flex-col sm:flex-row gap-4">
			<div class="flex-1 relative">
				<div
					class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
				>
					<svg
						class="h-5 w-5 text-gray-400"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<input
					type="text"
					v-model="searchQuery"
					placeholder="Search products..."
					class="block w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
				/>
			</div>
			<div class="w-full sm:w-64">
				<Listbox v-model="categoryFilter">
					<div class="relative">
						<ListboxButton
							class="relative w-full cursor-default rounded-lg bg-white dark:bg-gray-800 py-2.5 pl-3 pr-10 text-left border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
						>
							<span
								class="block truncate text-gray-900 dark:text-gray-100"
							>
								{{
									categoryFilter
										? getCategoryName(categoryFilter)
										: "All Categories"
								}}
							</span>
							<span
								class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
							>
								<svg
									class="h-5 w-5 text-gray-400"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
						</ListboxButton>

						<transition
							leave-active-class="transition ease-in duration-100"
							leave-from-class="opacity-100"
							leave-to-class="opacity-0"
						>
							<ListboxOptions
								class="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 shadow-lg max-h-60 rounded-lg py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
							>
								<ListboxOption
									:value="''"
									v-slot="{ active, selected }"
									as="template"
								>
									<li
										:class="[
											active
												? 'bg-primary text-white'
												: 'text-gray-900 dark:text-gray-100',
											'cursor-default select-none relative py-2 pl-10 pr-4',
										]"
									>
										<span
											:class="[
												selected
													? 'font-medium'
													: 'font-normal',
												'block truncate',
											]"
										>
											All Categories
										</span>
										<span
											v-if="selected"
											class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary"
										>
											<svg
												class="h-5 w-5"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fill-rule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clip-rule="evenodd"
												/>
											</svg>
										</span>
									</li>
								</ListboxOption>
								<ListboxOption
									v-for="category in categories"
									:key="category.id"
									:value="category.id"
									v-slot="{ active, selected }"
									as="template"
								>
									<li
										:class="[
											active
												? 'bg-primary text-white'
												: 'text-gray-900 dark:text-gray-100',
											'cursor-default select-none relative py-2 pl-10 pr-4',
										]"
									>
										<span
											:class="[
												selected
													? 'font-medium'
													: 'font-normal',
												'block truncate',
											]"
										>
											{{ category.name }}
										</span>
										<span
											v-if="selected"
											class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary"
										>
											<svg
												class="h-5 w-5"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fill-rule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clip-rule="evenodd"
												/>
											</svg>
										</span>
									</li>
								</ListboxOption>
							</ListboxOptions>
						</transition>
					</div>
				</Listbox>
			</div>
		</div>

		<!-- Products Table -->
		<div class="mt-8 flex flex-col">
			<div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div
					class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
				>
					<div
						class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
					>
						<table class="min-w-full divide-y divide-border">
							<thead class="bg-gray-50 dark:bg-gray-800">
								<tr>
									<th
										scope="col"
										class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 sm:pl-6"
									>
										Image
									</th>
									<th
										scope="col"
										class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
									>
										Name
									</th>
									<th
										scope="col"
										class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
									>
										Description
									</th>
									<th
										scope="col"
										class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
									>
										Category
									</th>
									<th
										scope="col"
										class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
									>
										Price
									</th>
									<th
										scope="col"
										class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
									>
										Stock
									</th>
									<th
										scope="col"
										class="relative py-3.5 pl-3 pr-4 sm:pr-6"
									>
										<span class="sr-only">Actions</span>
									</th>
								</tr>
							</thead>
							<tbody class="divide-y divide-border bg-surface">
								<tr
									v-for="product in filteredProducts"
									:key="product.id"
								>
									<td
										class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-gray-100 sm:pl-6"
									>
										<div class="w-16 h-16">
											<img
												v-if="product.images.length > 0"
												:src="product.images[0]"
												:alt="product.name"
												class="w-full h-full object-cover rounded-lg"
											/>
											<div
												v-else
												class="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center"
											>
												<svg
													class="w-8 h-8 text-gray-400"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
													/>
												</svg>
											</div>
										</div>
									</td>
									<td
										class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-gray-100 sm:pl-6"
									>
										{{ product.name }}
									</td>
									<td
										class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400"
									>
										{{ product.description }}
									</td>
									<td
										class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400"
									>
										{{
											getCategoryName(product.categoryId)
										}}
									</td>
									<td
										class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400"
									>
										${{ product.price.toFixed(2) }}
									</td>
									<td
										class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400"
									>
										{{ product.stock }}
									</td>
									<td
										class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
									>
										<button
											@click="editProduct(product)"
											class="text-primary hover:text-primary-dark mr-4 transition-colors"
										>
											Edit
										</button>
										<button
											@click="deleteProduct(product)"
											class="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 transition-colors"
										>
											Delete
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

		<!-- Add/Edit Product Modal -->
		<div
			v-if="showModal"
			class="fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 flex items-center justify-center"
		>
			<div
				class="bg-surface rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
			>
				<h2
					class="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100"
				>
					{{ editingProduct ? "Edit Product" : "Add Product" }}
				</h2>
				<ProductForm
					v-model="productForm"
					:categories="categories"
					:is-uploading="isUploading"
					@submit="saveProduct"
					@image-upload="handleImageUpload"
					@remove-image="removeImage"
				/>
				<div class="mt-6 flex justify-end space-x-3">
					<button
						type="button"
						@click="showModal = false"
						class="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
					>
						Cancel
					</button>
					<button
						type="button"
						@click="saveProduct"
						class="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
					>
						{{ editingProduct ? "Update" : "Create" }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "admin",
});

import { ref, computed } from "vue";
import { useNuxtApp } from "#app";
import {
	Listbox,
	ListboxButton,
	ListboxOptions,
	ListboxOption,
} from "@headlessui/vue";
import { useAuthStore } from "~/stores/auth";
import ProductForm from "~/components/admin/ProductForm.vue";

interface Category {
	id: string;
	name: string;
	description: string;
}

interface Product {
	id: string;
	name: string;
	description: string;
	categoryId: string;
	price: number;
	stock: number;
	images: string[];
	specifications: Record<string, string>;
}

// State
const authStore = useAuthStore();
const products = ref<Product[]>([]);
const categories = ref<Category[]>([]);
const searchQuery = ref("");
const categoryFilter = ref("");
const showModal = ref(false);
const editingProduct = ref<Product | null>(null);
const isUploading = ref(false);
const productForm = ref({
	name: "",
	description: "",
	categoryId: "",
	price: 0,
	stock: 0,
	images: [] as string[],
	specifications: {} as Record<string, string>,
});

// Computed
const filteredProducts = computed(() => {
	return products.value.filter((product) => {
		const matchesSearch =
			product.name
				.toLowerCase()
				.includes(searchQuery.value.toLowerCase()) ||
			product.description
				.toLowerCase()
				.includes(searchQuery.value.toLowerCase());
		const matchesCategory =
			!categoryFilter.value ||
			product.categoryId === categoryFilter.value;
		return matchesSearch && matchesCategory;
	});
});

// Methods
const fetchProducts = async () => {
	try {
		const response = await $fetch("/api/products");
		products.value = response.products;
	} catch (error: any) {
		const { $notification } = useNuxtApp();
		const errorMessage = error.data?.message || error.message || 'Failed to fetch products';
		$notification.show({
			type: 'error',
			title: 'Error',
			message: errorMessage,
			timeout: 5000
		});
	}
};

const fetchCategories = async () => {
	try {
		const response = await $fetch("/api/categories");
		categories.value = response;
	} catch (error: any) {
		const { $notification } = useNuxtApp();
		const errorMessage = error.data?.message || error.message || 'Failed to fetch categories';
		$notification.show({
			type: 'error',
			title: 'Error',
			message: errorMessage,
			timeout: 5000
		});
	}
};

const getCategoryName = (categoryId: string) => {
	const category = categories.value.find((c) => c.id === categoryId);
	return category ? category.name : "Unknown";
};

const openAddProductModal = () => {
	editingProduct.value = null;
	productForm.value = {
		name: "",
		description: "",
		categoryId: "",
		price: 0,
		stock: 0,
		images: [],
		specifications: {},
	};
	showModal.value = true;
};

const editProduct = (product: Product) => {
	editingProduct.value = product;
	productForm.value = JSON.parse(
		JSON.stringify({
			name: product.name,
			description: product.description,
			categoryId: product.categoryId,
			price: product.price,
			stock: product.stock,
			images: product.images || [],
			specifications: product.specifications || {},
		})
	);
	showModal.value = true;
};

const saveProduct = async () => {
	try {
		const { $notification } = useNuxtApp();
		// Create a deep copy of the form data to ensure all nested objects are included
		const productData = {
			name: productForm.value.name,
			description: productForm.value.description,
			categoryId: productForm.value.categoryId,
			price: productForm.value.price,
			stock: productForm.value.stock,
			images: [...productForm.value.images],
			specifications: { ...productForm.value.specifications },
		};

		if (editingProduct.value) {
			await $fetch(`/api/products/${editingProduct.value.id}`, {
				method: "PUT",
				body: productData,
			});
			$notification.show({
				type: 'success',
				title: 'Success',
				message: 'Product updated successfully',
				timeout: 5000
			});
		} else {
			await $fetch("/api/products", {
				method: "POST",
				body: productData,
			});
			$notification.show({
				type: 'success',
				title: 'Success',
				message: 'Product created successfully',
				timeout: 5000
			});
		}

		showModal.value = false;
		await fetchProducts();
	} catch (error: any) {
		const { $notification } = useNuxtApp();
		const errorMessage = error.data?.message || error.message || 'Failed to save product';
		$notification.show({
			type: 'error',
			title: 'Error',
			message: errorMessage,
			timeout: 5000
		});
	}
};

const deleteProduct = async (product: Product) => {
	if (!confirm(`Are you sure you want to delete ${product.name}?`)) {
		return;
	}

	try {
		const { $notification } = useNuxtApp();
		await $fetch(`/api/products/${product.id}`, {
			method: "DELETE",
		});
		await fetchProducts();
		$notification.show({
			type: 'success',
			title: 'Success',
			message: 'Product deleted successfully',
			timeout: 5000
		});
	} catch (error: any) {
		const { $notification } = useNuxtApp();
		const errorMessage = error.data?.message || error.message || 'Failed to delete product';
		$notification.show({
			type: 'error',
			title: 'Error',
			message: errorMessage,
			timeout: 5000
		});
	}
};

const handleImageUpload = async (event: Event) => {
	const input = event.target as HTMLInputElement;
	if (!input.files?.length) return;

	const file = input.files[0];
	if (file.size > 2 * 1024 * 1024) {
		const { $notification } = useNuxtApp();
		$notification.show({
			type: 'error',
			title: 'Error',
			message: 'File size must be less than 2MB',
			timeout: 5000
		});
		return;
	}

	isUploading.value = true;
	try {
		const { $notification } = useNuxtApp();
		const uploadFormData = new FormData();
		uploadFormData.append("file", file);

		const response = await fetch("/api/admin/upload", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${authStore.token}`,
			},
			body: uploadFormData,
		});

		if (!response.ok) {
			throw new Error("Upload failed");
		}

		const data = await response.json();
		productForm.value.images.push(data.url);
		$notification.show({
			type: 'success',
			title: 'Success',
			message: 'Image uploaded successfully',
			timeout: 5000
		});
	} catch (error: any) {
		const { $notification } = useNuxtApp();
		const errorMessage = error.data?.message || error.message || 'Failed to upload image';
		$notification.show({
			type: 'error',
			title: 'Error',
			message: errorMessage,
			timeout: 5000
		});
	} finally {
		isUploading.value = false;
		input.value = "";
	}
};

const removeImage = (index: number) => {
	productForm.value.images.splice(index, 1);
};

// Initialize
fetchProducts();
fetchCategories();
</script>

<style scoped>
.bg-background {
	background-color: var(--color-background);
}

.bg-surface {
	background-color: var(--color-surface);
}

.text-primary {
	color: var(--color-primary);
}

.border-border {
	border-color: var(--color-border);
}

.hover\:bg-primary-dark:hover {
	filter: brightness(0.9);
}
</style>
