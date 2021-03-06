import MyComponent from '../../../../slices/Cover';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Cover'
}


export const _Full = () => ({
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
      mock: {"variation":"full","name":"Full","slice_type":"cover","items":[{"ctaLabel":"repurpose extensible e-commerce","ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaStyle":"Filled"},{"ctaLabel":"streamline out-of-the-box deliverables","ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaStyle":"Filled"},{"ctaLabel":"generate ubiquitous deliverables","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaStyle":"Outline"},{"ctaLabel":"facilitate 24/365 blockchains","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaStyle":"Outline"},{"ctaLabel":"synergize distributed synergies","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaStyle":"Filled"},{"ctaLabel":"redefine magnetic interfaces","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaStyle":"Filled"}],"primary":{"image":{"dimensions":{"width":2000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=2000&h=1000&fit=crop"},"tagline":"engage sexy interfaces","title":[{"type":"heading2","text":"E-enable e-business paradigms","spans":[]}],"text":[{"type":"paragraph","text":"Dolore minim aliquip magna nostrud anim. Amet ad sit ipsum laboris enim dolor sint qui.","spans":[]}],"top":true},"id":"_Full"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Full.storyName = 'Full'

export const _Contained = () => ({
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
      mock: {"variation":"contained","name":"Contained","slice_type":"cover","items":[{"ctaLabel":"recontextualize turn-key relationships","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaStyle":"Filled"},{"ctaLabel":"aggregate global functionalities","ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaStyle":"Filled"}],"primary":{"image":{"dimensions":{"width":2000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=2000&h=1000&fit=crop"},"tagline":"transform distributed methodologies","title":[{"type":"heading2","text":"Reinvent virtual infomediaries","spans":[]}],"text":[{"type":"paragraph","text":"Velit nostrud amet ad aute amet cillum aliquip reprehenderit pariatur ipsum anim officia irure elit. Aute ex velit id voluptate sit quis.","spans":[]}],"top":true},"id":"_Contained"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Contained.storyName = 'Contained'

export const _FullSecondary = () => ({
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
      mock: {"variation":"fullSecondary","name":"Full / Secondary colors","slice_type":"cover","items":[{"ctaLabel":"deliver one-to-one e-tailers","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaStyle":"Filled"},{"ctaLabel":"reintermediate virtual infrastructures","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaStyle":"Filled"},{"ctaLabel":"syndicate customized synergies","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaStyle":"Outline"},{"ctaLabel":"implement proactive e-markets","ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaStyle":"Outline"},{"ctaLabel":"morph cross-platform blockchains","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaStyle":"Filled"}],"primary":{"image":{"dimensions":{"width":2000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=2000&h=1000&fit=crop"},"tagline":"leverage robust synergies","title":[{"type":"heading2","text":"Transition vertical e-markets","spans":[]}],"text":[{"type":"paragraph","text":"Est pariatur aute fugiat ea velit qui tempor deserunt labore. Lorem enim duis consequat sunt reprehenderit cupidatat aliqua eu veniam anim commodo sunt officia. Ad tempor Lorem officia consectetur mollit amet.","spans":[]}],"top":true},"id":"_FullSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_FullSecondary.storyName = 'Full / Secondary colors'

export const _ContainedSecondary = () => ({
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
      mock: {"variation":"containedSecondary","name":"Contained / Secondary colors","slice_type":"cover","items":[{"ctaLabel":"integrate integrated vortals","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaStyle":"Filled"},{"ctaLabel":"revolutionize B2B methodologies","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaStyle":"Outline"},{"ctaLabel":"visualize back-end ROI","ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaStyle":"Filled"},{"ctaLabel":"synthesize enterprise schemas","ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaStyle":"Filled"},{"ctaLabel":"recontextualize strategic users","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaStyle":"Filled"}],"primary":{"image":{"dimensions":{"width":2000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=2000&h=1000&fit=crop"},"tagline":"expedite front-end methodologies","title":[{"type":"heading2","text":"Utilize mission-critical technologies","spans":[]}],"text":[{"type":"paragraph","text":"Ex culpa ullamco magna dolore amet labore velit minim. Do eiusmod cupidatat quis culpa.","spans":[]}],"top":false},"id":"_ContainedSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ContainedSecondary.storyName = 'Contained / Secondary colors'
