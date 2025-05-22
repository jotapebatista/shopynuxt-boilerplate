
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AppHeader': typeof import("../components/AppHeader.vue")['default']
    'BaseNavLink': typeof import("../components/BaseNavLink.vue")['default']
    'Footer': typeof import("../components/Footer.vue")['default']
    'Logo': typeof import("../components/Logo.vue")['default']
    'Navbar': typeof import("../components/Navbar.vue")['default']
    'Notification': typeof import("../components/Notification.vue")['default']
    'PaymentForm': typeof import("../components/PaymentForm.vue")['default']
    'ProductCard': typeof import("../components/ProductCard.vue")['default']
    'ProductFilters': typeof import("../components/ProductFilters.vue")['default']
    'UserProfile': typeof import("../components/UserProfile.vue")['default']
    'WishlistButton': typeof import("../components/WishlistButton.vue")['default']
    'AdminNav': typeof import("../components/admin/AdminNav.vue")['default']
    'AdminProductForm': typeof import("../components/admin/ProductForm.vue")['default']
    'AdminProductSpecifications': typeof import("../components/admin/ProductSpecifications.vue")['default']
    'AdminChartsBaseChart': typeof import("../components/admin/charts/BaseChart.vue")['default']
    'AdminChartsOrdersByStatusChart': typeof import("../components/admin/charts/OrdersByStatusChart.vue")['default']
    'AdminChartsRevenueChart': typeof import("../components/admin/charts/RevenueChart.vue")['default']
    'AdminChartsTopProductsChart': typeof import("../components/admin/charts/TopProductsChart.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAppHeader': LazyComponent<typeof import("../components/AppHeader.vue")['default']>
    'LazyBaseNavLink': LazyComponent<typeof import("../components/BaseNavLink.vue")['default']>
    'LazyFooter': LazyComponent<typeof import("../components/Footer.vue")['default']>
    'LazyLogo': LazyComponent<typeof import("../components/Logo.vue")['default']>
    'LazyNavbar': LazyComponent<typeof import("../components/Navbar.vue")['default']>
    'LazyNotification': LazyComponent<typeof import("../components/Notification.vue")['default']>
    'LazyPaymentForm': LazyComponent<typeof import("../components/PaymentForm.vue")['default']>
    'LazyProductCard': LazyComponent<typeof import("../components/ProductCard.vue")['default']>
    'LazyProductFilters': LazyComponent<typeof import("../components/ProductFilters.vue")['default']>
    'LazyUserProfile': LazyComponent<typeof import("../components/UserProfile.vue")['default']>
    'LazyWishlistButton': LazyComponent<typeof import("../components/WishlistButton.vue")['default']>
    'LazyAdminNav': LazyComponent<typeof import("../components/admin/AdminNav.vue")['default']>
    'LazyAdminProductForm': LazyComponent<typeof import("../components/admin/ProductForm.vue")['default']>
    'LazyAdminProductSpecifications': LazyComponent<typeof import("../components/admin/ProductSpecifications.vue")['default']>
    'LazyAdminChartsBaseChart': LazyComponent<typeof import("../components/admin/charts/BaseChart.vue")['default']>
    'LazyAdminChartsOrdersByStatusChart': LazyComponent<typeof import("../components/admin/charts/OrdersByStatusChart.vue")['default']>
    'LazyAdminChartsRevenueChart': LazyComponent<typeof import("../components/admin/charts/RevenueChart.vue")['default']>
    'LazyAdminChartsTopProductsChart': LazyComponent<typeof import("../components/admin/charts/TopProductsChart.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AppHeader: typeof import("../components/AppHeader.vue")['default']
export const BaseNavLink: typeof import("../components/BaseNavLink.vue")['default']
export const Footer: typeof import("../components/Footer.vue")['default']
export const Logo: typeof import("../components/Logo.vue")['default']
export const Navbar: typeof import("../components/Navbar.vue")['default']
export const Notification: typeof import("../components/Notification.vue")['default']
export const PaymentForm: typeof import("../components/PaymentForm.vue")['default']
export const ProductCard: typeof import("../components/ProductCard.vue")['default']
export const ProductFilters: typeof import("../components/ProductFilters.vue")['default']
export const UserProfile: typeof import("../components/UserProfile.vue")['default']
export const WishlistButton: typeof import("../components/WishlistButton.vue")['default']
export const AdminNav: typeof import("../components/admin/AdminNav.vue")['default']
export const AdminProductForm: typeof import("../components/admin/ProductForm.vue")['default']
export const AdminProductSpecifications: typeof import("../components/admin/ProductSpecifications.vue")['default']
export const AdminChartsBaseChart: typeof import("../components/admin/charts/BaseChart.vue")['default']
export const AdminChartsOrdersByStatusChart: typeof import("../components/admin/charts/OrdersByStatusChart.vue")['default']
export const AdminChartsRevenueChart: typeof import("../components/admin/charts/RevenueChart.vue")['default']
export const AdminChartsTopProductsChart: typeof import("../components/admin/charts/TopProductsChart.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../components/AppHeader.vue")['default']>
export const LazyBaseNavLink: LazyComponent<typeof import("../components/BaseNavLink.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/Footer.vue")['default']>
export const LazyLogo: LazyComponent<typeof import("../components/Logo.vue")['default']>
export const LazyNavbar: LazyComponent<typeof import("../components/Navbar.vue")['default']>
export const LazyNotification: LazyComponent<typeof import("../components/Notification.vue")['default']>
export const LazyPaymentForm: LazyComponent<typeof import("../components/PaymentForm.vue")['default']>
export const LazyProductCard: LazyComponent<typeof import("../components/ProductCard.vue")['default']>
export const LazyProductFilters: LazyComponent<typeof import("../components/ProductFilters.vue")['default']>
export const LazyUserProfile: LazyComponent<typeof import("../components/UserProfile.vue")['default']>
export const LazyWishlistButton: LazyComponent<typeof import("../components/WishlistButton.vue")['default']>
export const LazyAdminNav: LazyComponent<typeof import("../components/admin/AdminNav.vue")['default']>
export const LazyAdminProductForm: LazyComponent<typeof import("../components/admin/ProductForm.vue")['default']>
export const LazyAdminProductSpecifications: LazyComponent<typeof import("../components/admin/ProductSpecifications.vue")['default']>
export const LazyAdminChartsBaseChart: LazyComponent<typeof import("../components/admin/charts/BaseChart.vue")['default']>
export const LazyAdminChartsOrdersByStatusChart: LazyComponent<typeof import("../components/admin/charts/OrdersByStatusChart.vue")['default']>
export const LazyAdminChartsRevenueChart: LazyComponent<typeof import("../components/admin/charts/RevenueChart.vue")['default']>
export const LazyAdminChartsTopProductsChart: LazyComponent<typeof import("../components/admin/charts/TopProductsChart.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
