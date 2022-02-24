import MyComponent from '../../../../slices/ImageAndText';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageAndText'
}


export const _Left = () => ({
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
      mock: {"variation":"left","name":"Left aligned","slice_type":"image_and_text","items":[],"primary":{"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&h=1000&fit=crop"},"tagline":"disintermediate B2C infrastructures","title":[{"type":"heading2","text":"Matrix dot-com deliverables","spans":[]}],"text":[{"type":"paragraph","text":"Labore ut dolore in adipisicing.","spans":[]}],"ctaLabel":"reintermediate seamless relationships","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"top":false},"id":"_Left"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Left.storyName = 'Left aligned'

export const _Right = () => ({
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
      mock: {"variation":"right","name":"Right aligned","slice_type":"image_and_text","items":[],"primary":{"tagline":"scale customized methodologies","title":[{"type":"heading2","text":"Revolutionize world-class solutions","spans":[]}],"text":[{"type":"paragraph","text":"Ea in et consectetur id voluptate minim amet.","spans":[]}],"ctaLabel":"synthesize revolutionary infrastructures","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=1000&h=1000&fit=crop"},"top":true},"id":"_Right"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Right.storyName = 'Right aligned'

export const _LeftFull = () => ({
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
      mock: {"variation":"leftFull","name":"Left aligned / Full width","slice_type":"image_and_text","items":[],"primary":{"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=1000&h=1000&fit=crop"},"tagline":"aggregate dot-com users","title":[{"type":"heading2","text":"Implement turn-key experiences","spans":[]}],"text":[{"type":"paragraph","text":"Labore elit aute qui ea magna mollit ullamco laboris eu. Qui nostrud est ullamco quis dolor in sit ullamco consequat in voluptate non amet.","spans":[]}],"ctaLabel":"recontextualize open-source niches","ctaLink":{"link_type":"Web","url":"https://prismic.io"},"top":false},"id":"_LeftFull"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_LeftFull.storyName = 'Left aligned / Full width'

export const _RightFull = () => ({
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
      mock: {"variation":"rightFull","name":"Right aligned / Full width","slice_type":"image_and_text","items":[],"primary":{"tagline":"embrace visionary e-business","title":[{"type":"heading2","text":"Strategize turn-key convergence","spans":[]}],"text":[{"type":"paragraph","text":"Officia excepteur ipsum laboris eiusmod eu sit velit ex ullamco cillum ea irure sit.","spans":[]}],"ctaLabel":"matrix bricks-and-clicks initiatives","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=1000&h=1000&fit=crop"},"top":false},"id":"_RightFull"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RightFull.storyName = 'Right aligned / Full width'

export const _LeftSecondary = () => ({
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
      mock: {"variation":"leftSecondary","name":"Left aligned / Secondary colors","slice_type":"image_and_text","items":[],"primary":{"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=1000&h=1000&fit=crop"},"tagline":"orchestrate mission-critical partnerships","title":[{"type":"heading2","text":"Matrix clicks-and-mortar communities","spans":[]}],"text":[{"type":"paragraph","text":"Quis enim duis est dolore ullamco enim pariatur. Mollit labore sit ipsum minim laboris. Ea in aliquip consequat et incididunt sunt occaecat voluptate quis eu excepteur laboris dolore voluptate.","spans":[]}],"ctaLabel":"synergize user-centric schemas","ctaLink":{"link_type":"Web","url":"http://google.com"},"top":true},"id":"_LeftSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_LeftSecondary.storyName = 'Left aligned / Secondary colors'

export const _RightSecondary = () => ({
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
      mock: {"variation":"rightSecondary","name":"Right aligned / Secondary colors","slice_type":"image_and_text","items":[],"primary":{"tagline":"scale mission-critical paradigms","title":[{"type":"heading2","text":"Integrate e-business supply-chains","spans":[]}],"text":[{"type":"paragraph","text":"Do deserunt incididunt cillum ipsum cillum quis enim cupidatat nulla voluptate enim consequat Lorem dolor.","spans":[]}],"ctaLabel":"transform killer infomediaries","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=1000&h=1000&fit=crop"},"top":false},"id":"_RightSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RightSecondary.storyName = 'Right aligned / Secondary colors'

export const _LeftFullSecondary = () => ({
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
      mock: {"variation":"leftFullSecondary","name":"Left aligned / Full width / Secondary colors","slice_type":"image_and_text","items":[],"primary":{"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=1000&h=1000&fit=crop"},"tagline":"drive back-end web-readiness","title":[{"type":"heading2","text":"Disintermediate revolutionary systems","spans":[]}],"text":[{"type":"paragraph","text":"Amet sint cillum sit culpa dolore Lorem reprehenderit sint deserunt aliquip dolore non. Commodo culpa sunt eiusmod in officia pariatur.","spans":[]}],"ctaLabel":"extend cross-media paradigms","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"top":true},"id":"_LeftFullSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_LeftFullSecondary.storyName = 'Left aligned / Full width / Secondary colors'

export const _RightFullSecondary = () => ({
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
      mock: {"variation":"rightFullSecondary","name":"Right aligned / Full width / Secondary colors","slice_type":"image_and_text","items":[],"primary":{"tagline":"visualize holistic e-business","title":[{"type":"heading2","text":"Leverage dynamic infomediaries","spans":[]}],"text":[{"type":"paragraph","text":"Excepteur fugiat do incididunt ullamco excepteur sunt nostrud. In ipsum in minim et non aliquip. Do aliquip minim excepteur mollit reprehenderit in aliquip pariatur do in duis consectetur labore.","spans":[]}],"ctaLabel":"synergize sticky blockchains","ctaLink":{"link_type":"Web","url":"https://prismic.io"},"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=1000&h=1000&fit=crop"},"top":true},"id":"_RightFullSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RightFullSecondary.storyName = 'Right aligned / Full width / Secondary colors'
