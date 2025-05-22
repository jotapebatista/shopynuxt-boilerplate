<template>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
			Admin Dashboard
		</h1>

		<!-- Stats Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
			<div
				v-for="stat in stats"
				:key="stat.label"
				class="bg-surface rounded-lg p-6 shadow-sm"
			>
				<h3
					class="text-sm font-medium text-gray-500 dark:text-gray-400"
				>
					{{ stat.label }}
				</h3>
				<p
					class="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100"
				>
					{{ stat.value }}
				</p>
			</div>
		</div>

		<!-- Charts Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
			<RevenueChart :data="statsData.revenueByMonth" />
			<OrdersByStatusChart :data="statsData.ordersByStatus" />
		</div>

		<!-- Top Products Chart -->
		<div class="mb-8">
			<TopProductsChart :data="statsData.topProducts" />
		</div>

		<!-- Recent Orders -->
		<div class="bg-surface rounded-lg shadow-sm">
			<div
				class="px-6 py-4 border-b border-gray-200 dark:border-gray-700"
			>
				<h2
					class="text-lg font-medium text-gray-900 dark:text-gray-100"
				>
					Recent Orders
				</h2>
			</div>
			<div class="overflow-x-auto">
				<table
					class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
				>
					<thead class="bg-gray-50 dark:bg-gray-800">
						<tr>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
							>
								Order ID
							</th>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
							>
								Customer
							</th>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
							>
								Status
							</th>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
							>
								Total
							</th>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
							>
								Date
							</th>
						</tr>
					</thead>
					<tbody
						class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700"
					>
						<tr
							v-for="order in statsData.recentOrders"
							:key="order.id"
						>
							<td
								class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100"
							>
								{{ order.id }}
							</td>
							<td
								class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100"
							>
								{{ order.customer }}
							</td>
							<td class="px-6 py-4 whitespace-nowrap">
								<span
									:class="[
										'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
										{
											'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200':
												order.status === 'PENDING',
											'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200':
												order.status === 'PROCESSING',
											'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200':
												order.status === 'SHIPPED',
											'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200':
												order.status === 'DELIVERED',
											'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200':
												order.status === 'CANCELLED',
										},
									]"
								>
									{{ order.status }}
								</span>
							</td>
							<td
								class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100"
							>
								${{ order.total }}
							</td>
							<td
								class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100"
							>
								{{ order.date }}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "admin",
});
import { ref, onMounted } from "vue";
import RevenueChart from "~/components/admin/charts/RevenueChart.vue";
import OrdersByStatusChart from "~/components/admin/charts/OrdersByStatusChart.vue";
import TopProductsChart from "~/components/admin/charts/TopProductsChart.vue";

interface StatsData {
	stats: {
		totalOrders: number;
		totalUsers: number;
		totalProducts: number;
		totalRevenue: string;
	};
	recentOrders: Array<{
		id: string;
		customer: string;
		status: string;
		total: number;
		date: string;
	}>;
	ordersByStatus: Array<{
		status: string;
		count: number;
	}>;
	revenueByMonth: Array<{
		month: string;
		revenue: number;
	}>;
	topProducts: Array<{
		name: string;
		quantity: number;
	}>;
}

const statsData = ref<StatsData>({
	stats: {
		totalOrders: 0,
		totalUsers: 0,
		totalProducts: 0,
		totalRevenue: "0",
	},
	recentOrders: [],
	ordersByStatus: [],
	revenueByMonth: [],
	topProducts: [],
});

const stats = ref([
	{ label: "Total Orders", value: "0" },
	{ label: "Total Users", value: "0" },
	{ label: "Total Products", value: "0" },
	{ label: "Total Revenue", value: "$0" },
]);

const fetchStats = async () => {
	try {
		const response = await $fetch<StatsData>("/api/admin/stats");
		statsData.value = response;

		// Update stats display
		stats.value = [
			{
				label: "Total Orders",
				value: response.stats.totalOrders.toString(),
			},
			{
				label: "Total Users",
				value: response.stats.totalUsers.toString(),
			},
			{
				label: "Total Products",
				value: response.stats.totalProducts.toString(),
			},
			{
				label: "Total Revenue",
				value: `$${response.stats.totalRevenue}`,
			},
		];
	} catch (error) {
		console.error("Error fetching stats:", error);
	}
};

onMounted(() => {
	fetchStats();
});
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
</style>
