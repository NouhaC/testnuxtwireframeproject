import MyComponent from '../../../../slices/Logos';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Logos'
}


export const _Stacked = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"stacked","name":"Stacked","slice_type":"logos","items":[{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://prismic.io"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://prismic.io"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"http://google.com"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"http://google.com"}}],"primary":{"tagline":"whiteboard sticky niches","title":[{"type":"heading2","text":"Strategize magnetic communities","spans":[]}]},"id":"_Stacked"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Stacked.storyName = 'Stacked'

export const _Carousel = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"carousel","name":"Carousel","slice_type":"logos","items":[{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"http://google.com"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"http://google.com"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://prismic.io"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://prismic.io"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"http://twitter.com"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"tagline":"transform scalable architectures","title":[{"type":"heading2","text":"Exploit next-generation deliverables","spans":[]}]},"id":"_Carousel"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Carousel.storyName = 'Carousel'

export const _StackedSecondary = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"stackedSecondary","name":"Stacked / Secondary colors","slice_type":"logos","items":[{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://prismic.io"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"http://twitter.com"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"http://google.com"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"tagline":"scale mission-critical schemas","title":[{"type":"heading2","text":"Leverage integrated niches","spans":[]}]},"id":"_StackedSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_StackedSecondary.storyName = 'Stacked / Secondary colors'

export const _CarouselSecondary = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"carouselSecondary","name":"Carousel / Secondary colors","slice_type":"logos","items":[{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"http://google.com"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://prismic.io"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"tagline":"aggregate mission-critical interfaces","title":[{"type":"heading2","text":"Envisioneer interactive eyeballs","spans":[]}]},"id":"_CarouselSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_CarouselSecondary.storyName = 'Carousel / Secondary colors'
