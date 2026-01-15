<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import ImageViewerModal from '../Component/Widget/Modal/ImageViewerModal.vue';
import { ref } from 'vue';
const gallery = ref([
  { src: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870', title: 'Kitchen' },
  { src: 'https://images.unsplash.com/photo-1613891186868-eebda780cc8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870', title: 'Rooftop' },
  { src: 'https://images.unsplash.com/photo-1613685301586-4f2b15f0ccd4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032', title: 'Drawing Room' },
  { src: 'https://images.unsplash.com/photo-1486946255434-2466348c2166?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387', title: 'Study Room' },
  { src: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032', title: 'Bedroom' },
  { src: 'https://images.unsplash.com/photo-1560448205-d82bf18b9bcf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870', title: 'Balcony View' },
]);

const isModalOpen = ref(false)
const selectedIndex = ref(0)

const handleOpenModal = (imageIndex) => {
  isModalOpen.value = true;
  selectedIndex.value = imageIndex;
}
const handleCloseModal = () => {
  isModalOpen.value = false
}
const handlePrev = () => {
  if (selectedIndex.value > 0) {
    selectedIndex.value -= 1;
  }
}
const handleNext = () => {
  selectedIndex.value += 1;
  // console.log(gallery.value.length, selectedIndex.value);
  if (selectedIndex.value === gallery.value.length) {
    selectedIndex.value = 0;
    // console.log('selected ', selectedIndex);
  }
}
</script>

<template>
  <div class="modal-page">
    <BaseButton @click="handleOpenModal">Click Me</BaseButton>
    <ImageViewerModal :isModalOpen="isModalOpen" :handleCloseModal="handleCloseModal" :handleNext="handleNext"
      :handlePrev="handlePrev">
    <h4 style="color: white;text-align: center;">this is modal</h4>
    </ImageViewerModal>
  </div>
</template>
