<template>
	<form @submit.prevent="$emit('submit')" class="space-y-8">
		<!-- Image Upload -->
		<div class="space-y-4">
			<label
				class="block text-sm font-medium text-gray-700 dark:text-gray-300"
			>
				Product Images
			</label>
			<div class="flex flex-wrap gap-4">
				<div
					v-for="(image, index) in modelValue.images"
					:key="index"
					class="relative group"
				>
					<div
						class="w-32 h-32 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
					>
						<img
							:src="image"
							alt="Product"
							class="w-full h-full object-cover"
						/>
						<div
							class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-200"
						></div>
					</div>
					<button
						type="button"
						@click="$emit('removeImage', index)"
						class="absolute -top-2 -right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</div>
				<div class="flex-1">
					<div
						class="flex items-center justify-center w-full"
						:class="{
							'border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6':
								modelValue.images.length === 0,
						}"
					>
						<label
							class="flex flex-col items-center justify-center w-full h-32 cursor-pointer bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
						>
							<div
								class="flex flex-col items-center justify-center pt-5 pb-6"
							>
								<svg
									class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 16"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
									/>
								</svg>
								<p
									class="mb-2 text-sm text-gray-500 dark:text-gray-400"
								>
									<span class="font-semibold"
										>Click to upload</span
									>
									or drag and drop
								</p>
								<p
									class="text-xs text-gray-500 dark:text-gray-400"
								>
									PNG, JPG or WEBP (MAX. 2MB)
								</p>
							</div>
							<input
								type="file"
								class="hidden"
								accept="image/*"
								@change="$emit('imageUpload', $event)"
								:disabled="isUploading"
							/>
						</label>
					</div>
				</div>
			</div>
		</div>

		<!-- Basic Information -->
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
			<div class="space-y-4">
				<div>
					<label
						class="block text-sm font-medium text-gray-700 dark:text-gray-300"
						>Name</label
					>
					

					<input
						type="text"
						v-model="modelValue.name"
						placeholder="Search products..."
						class="block w-full p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
					/>
				</div>

				<div>
					<label
						class="block text-sm font-medium text-gray-700 dark:text-gray-300"
						>Category</label
					>
					<Listbox v-model="modelValue.categoryId">
						<div class="relative mt-1">
							<ListboxButton
								class="relative w-full cursor-default rounded-lg bg-white dark:bg-gray-800 py-2.5 pl-3 pr-10 text-left border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
							>
								<span
									class="block truncate text-gray-900 dark:text-gray-100"
									>{{
										getCategoryName(
											modelValue.categoryId
										) || "Select a category"
									}}</span
								>
								<span
									class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-5 w-5 text-gray-400"
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
									class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
								>
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
												'relative cursor-default select-none py-2 pl-10 pr-4',
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
													xmlns="http://www.w3.org/2000/svg"
													class="h-5 w-5"
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

			<div class="space-y-4">
				<div>
					<label
						class="block text-sm font-medium text-gray-700 dark:text-gray-300"
						>Price</label
					>
					<div class="relative rounded-lg shadow-sm">
						<div
							class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
						>
							<span
								class="text-gray-500 dark:text-gray-400 sm:text-sm"
								>$</span
							>
						</div>
						<input
							v-model.number="modelValue.price"
							type="number"
							step="0.01"
							required
							class="block w-full pl-7 p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
						/>
					</div>
				</div>

				<div>
					<label
						class="block text-sm font-medium text-gray-700 dark:text-gray-300"
						>Stock</label
					>
					<input
						v-model.number="modelValue.stock"
						type="number"
						required
						class="block w-full p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
					/>
				</div>
			</div>
		</div>

		<div>
			<label
				class="block text-sm font-medium text-gray-700 dark:text-gray-300"
				>Description</label
			>
			<textarea
				v-model="modelValue.description"
				rows="3"
				required
				class="block w-full p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
			></textarea>
		</div>

		<!-- Specifications -->
		<ProductSpecifications v-model="modelValue.specifications" />
	</form>
</template>

<script setup lang="ts">
import {
	Listbox,
	ListboxButton,
	ListboxOptions,
	ListboxOption,
} from "@headlessui/vue";
import ProductSpecifications from "./ProductSpecifications.vue";

interface Category {
	id: string;
	name: string;
	description: string;
}

interface Product {
	name: string;
	description: string;
	categoryId: string;
	price: number;
	stock: number;
	images: string[];
	specifications: Record<string, string>;
}

const props = defineProps<{
	modelValue: Product;
	categories: Category[];
	isUploading?: boolean;
}>();

const emit = defineEmits<{
	(e: "update:modelValue", value: Product): void;
	(e: "submit"): void;
	(e: "imageUpload", event: Event): void;
	(e: "removeImage", index: number): void;
}>();

const getCategoryName = (categoryId: string) => {
	const category = props.categories.find((c) => c.id === categoryId);
	return category ? category.name : "";
};
</script>
