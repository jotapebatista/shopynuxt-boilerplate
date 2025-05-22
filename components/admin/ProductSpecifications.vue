<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Specifications</label>
      <button
        type="button"
        @click="addSpecification"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-primary bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>
        Add Specification
      </button>
    </div>

    <div class="space-y-4">
      <TransitionGroup
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <div
          v-for="(spec, index) in localSpecifications"
          :key="index"
          class="flex gap-4 items-start bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
        >
          <div class="flex-1">
            <Listbox v-model="spec.key">
              <div class="relative">
                <ListboxButton class="relative w-full cursor-default rounded-lg bg-white dark:bg-gray-800 py-2.5 pl-3 pr-10 text-left border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
                  <span class="block truncate text-gray-900 dark:text-gray-100">{{ spec.key || 'Select a specification' }}</span>
                  <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </ListboxButton>

                <transition
                  leave-active-class="transition ease-in duration-100"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <ListboxOption
                      v-for="option in availableSpecifications"
                      :key="option"
                      :value="option"
                      v-slot="{ active, selected }"
                      as="template"
                    >
                      <li
                        :class="[
                          active ? 'bg-primary text-white' : 'text-gray-900 dark:text-gray-100',
                          'relative cursor-default select-none py-2 pl-10 pr-4'
                        ]"
                      >
                        <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">
                          {{ option }}
                        </span>
                        <span
                          v-if="selected"
                          class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                          </svg>
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
          </div>
          <div class="flex-1">
            <input
              v-model="spec.value"
              type="text"
              placeholder="Value"
              class="block w-full p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            />
          </div>
          <button
            type="button"
            @click="removeSpecification(index)"
            class="p-2 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'

interface Specification {
  key: string
  value: string
}

const props = defineProps<{
  modelValue: Record<string, string>
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: Record<string, string>): void
}>()

// Common specification keys
const availableSpecifications = [
  'Color',
  'Size',
  'Material',
  'Weight',
  'Dimensions',
  'Capacity',
  'Power',
  'Battery Life',
  'Storage',
  'RAM',
  'Processor',
  'Screen Size',
  'Resolution',
  'Connectivity',
  'Features',
  'Warranty',
  'Brand',
  'Model',
  'SKU',
  'UPC'
]

const localSpecifications = ref<Specification[]>([])

// Initialize specifications from props
const initializeSpecifications = () => {
  if (props.modelValue) {
    localSpecifications.value = Object.entries(props.modelValue).map(([key, value]) => ({
      key,
      value
    }))
  }
}

// Watch for prop changes
watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    const currentSpecs = localSpecifications.value
    const newSpecs = Object.entries(newValue).map(([key, value]) => ({ key, value }))
    
    // Only update if the specifications have actually changed
    if (JSON.stringify(currentSpecs) !== JSON.stringify(newSpecs)) {
      localSpecifications.value = newSpecs
    }
  }
}, { immediate: true, deep: true })

// Watch for local changes
watch(localSpecifications, (newValue) => {
  const specs = newValue.reduce((acc, { key, value }) => {
    if (key && value) {
      acc[key] = value
    }
    return acc
  }, {} as Record<string, string>)
  
  // Only emit if the specifications have actually changed
  if (JSON.stringify(specs) !== JSON.stringify(props.modelValue)) {
    emit('update:modelValue', specs)
  }
}, { deep: true })

const addSpecification = () => {
  localSpecifications.value.push({ key: '', value: '' })
}

const removeSpecification = (index: number) => {
  localSpecifications.value.splice(index, 1)
}
</script> 