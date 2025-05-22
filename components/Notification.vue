<template>
	<Transition
		enter-active-class="transition duration-300 ease-out"
		enter-from-class="transform -translate-y-2 opacity-0"
		enter-to-class="transform translate-y-0 opacity-100"
		leave-active-class="transition duration-200 ease-in"
		leave-from-class="transform translate-y-0 opacity-100"
		leave-to-class="transform -translate-y-2 opacity-0"
	>
		<div
			v-if="show"
			class="fixed top-4 right-4 z-50 w-96"
			:class="{
				'bg-red-50 border-red-200': type === 'error',
				'bg-green-50 border-green-200': type === 'success',
				'bg-blue-50 border-blue-200': type === 'info',
				'bg-yellow-50 border-yellow-200': type === 'warning',
			}"
		>
			<div class="p-4 rounded-lg border shadow-lg">
				<div class="flex items-start">
					<div class="flex-shrink-0">
						<!-- Error Icon -->
						<svg
							v-if="type === 'error'"
							class="h-5 w-5 text-red-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<!-- Success Icon -->
						<svg
							v-else-if="type === 'success'"
							class="h-5 w-5 text-green-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<!-- Info Icon -->
						<svg
							v-else-if="type === 'info'"
							class="h-5 w-5 text-blue-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<!-- Warning Icon -->
						<svg
							v-else-if="type === 'warning'"
							class="h-5 w-5 text-yellow-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
							/>
						</svg>
					</div>
					<div class="ml-3 flex-1">
						<p
							class="text-sm font-medium"
							:class="{
								'text-red-800': type === 'error',
								'text-green-800': type === 'success',
								'text-blue-800': type === 'info',
								'text-yellow-800': type === 'warning',
							}"
						>
							{{ title }}
						</p>
						<p
							class="mt-1 text-sm"
							:class="{
								'text-red-700': type === 'error',
								'text-green-700': type === 'success',
								'text-blue-700': type === 'info',
								'text-yellow-700': type === 'warning',
							}"
						>
							{{ message }}
						</p>
					</div>
					<div class="ml-4 flex-shrink-0 flex">
						<button
							@click="$emit('close')"
							class="inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
						>
							<span class="sr-only">Close</span>
							<svg
								class="h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script setup lang="ts">
defineProps<{
	show: boolean;
	type: "error" | "success" | "info" | "warning";
	title: string;
	message: string;
}>();

defineEmits<{
	(e: "close"): void;
}>();
</script>
