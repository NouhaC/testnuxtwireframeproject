import MyComponent from '../../../../slices/Features';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Features'
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
      mock: {"variation":"left","name":"Left aligned","slice_type":"features","items":[{"image":{"dimensions":{"width":128,"height":128},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=128&h=128&fit=crop"},"title":[{"type":"heading3","text":"Expedite ubiquitous initiatives","spans":[]}],"text":[{"type":"paragraph","text":"Enim mollit officia sunt elit fugiat aute reprehenderit.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"streamline front-end infomediaries"},{"image":{"dimensions":{"width":128,"height":128},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=128&h=128&fit=crop"},"title":[{"type":"heading3","text":"Implement one-to-one applications","spans":[]}],"text":[{"type":"paragraph","text":"Nisi excepteur est labore adipisicing ex voluptate reprehenderit exercitation velit elit est aute consequat mollit irure.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaLabel":"brand frictionless e-business"},{"image":{"dimensions":{"width":128,"height":128},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=128&h=128&fit=crop"},"title":[{"type":"heading3","text":"Orchestrate ubiquitous e-markets","spans":[]}],"text":[{"type":"paragraph","text":"Cupidatat minim amet est ullamco est ex cupidatat. Nostrud enim sit Lorem nostrud proident cillum esse proident eu nostrud. Ex proident laborum non labore ex laboris nostrud in Lorem.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"grow cutting-edge e-tailers"},{"image":{"dimensions":{"width":128,"height":128},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=128&h=128&fit=crop"},"title":[{"type":"heading3","text":"Empower sexy e-tailers","spans":[]}],"text":[{"type":"paragraph","text":"Sit velit fugiat eiusmod irure aute irure tempor nisi amet consectetur aute tempor aute incididunt deserunt. Lorem incididunt sint qui.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"transition turn-key experiences"},{"image":{"dimensions":{"width":128,"height":128},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=128&h=128&fit=crop"},"title":[{"type":"heading3","text":"Transform front-end communities","spans":[]}],"text":[{"type":"paragraph","text":"Amet nostrud magna exercitation deserunt irure ea sit reprehenderit in. Ipsum consectetur exercitation ipsum.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"strategize one-to-one partnerships"}],"primary":{"tagline":"synthesize holistic networks","title":[{"type":"heading2","text":"Maximize revolutionary deliverables","spans":[]}],"text":[{"type":"paragraph","text":"Ex do cupidatat occaecat ex.","spans":[]}]},"id":"_Left"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Left.storyName = 'Left aligned'

export const _Centered = () => ({
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
      mock: {"variation":"centered","name":"Centered","slice_type":"features","items":[{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Repurpose next-generation networks","spans":[]}],"text":[{"type":"paragraph","text":"Enim velit magna ut id amet. In ea proident dolore in.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaLabel":"synergize world-class mindshare"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Redefine cross-media eyeballs","spans":[]}],"text":[{"type":"paragraph","text":"Magna dolore aliqua dolore cillum aliquip elit do eu deserunt.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"aggregate intuitive e-tailers"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Integrate 24/365 action-items","spans":[]}],"text":[{"type":"paragraph","text":"Ipsum aute aliqua pariatur voluptate mollit dolor mollit. Minim dolore officia duis non amet proident laboris officia nisi laborum ullamco. Ut eu mollit consequat proident veniam et deserunt.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaLabel":"extend enterprise methodologies"}],"primary":{"tagline":"engineer viral applications","title":[{"type":"heading2","text":"Harness innovative action-items","spans":[]}],"text":[{"type":"paragraph","text":"Incididunt ad consectetur sit.","spans":[]}]},"id":"_Centered"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Centered.storyName = 'Centered'

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
      mock: {"variation":"leftSecondary","name":"Left aligned / Secondary","slice_type":"features","items":[{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Transition value-added technologies","spans":[]}],"text":[{"type":"paragraph","text":"Sint nulla est in ipsum ipsum sit in aliqua sit sunt velit in. Elit mollit consequat consectetur magna sunt et aliqua laboris culpa sit.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaLabel":"transition end-to-end e-services"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Optimize efficient infomediaries","spans":[]}],"text":[{"type":"paragraph","text":"Nostrud nulla nisi commodo non elit mollit voluptate cupidatat culpa culpa. Velit deserunt excepteur pariatur aute incididunt ullamco consequat Lorem mollit fugiat exercitation ex.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"integrate viral schemas"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Harness sexy models","spans":[]}],"text":[{"type":"paragraph","text":"Adipisicing mollit dolor in officia cillum laboris culpa cupidatat mollit amet deserunt ullamco aliqua. Nostrud ipsum commodo pariatur aliquip nisi.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaLabel":"utilize holistic applications"}],"primary":{"tagline":"monetize extensible infrastructures","title":[{"type":"heading2","text":"Benchmark cutting-edge initiatives","spans":[]}],"text":[{"type":"paragraph","text":"Dolore excepteur anim voluptate culpa laboris id sunt officia laboris occaecat magna ex culpa amet.","spans":[]}]},"id":"_LeftSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_LeftSecondary.storyName = 'Left aligned / Secondary'

export const _CenteredSecondary = () => ({
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
      mock: {"variation":"centeredSecondary","name":"Center / Secondary","slice_type":"features","items":[{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Brand ubiquitous technologies","spans":[]}],"text":[{"type":"paragraph","text":"Ea incididunt consequat irure velit adipisicing esse in culpa ex ipsum consequat minim culpa velit. Duis cillum ut ad.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaLabel":"extend dynamic e-services"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Architect cutting-edge schemas","spans":[]}],"text":[{"type":"paragraph","text":"Reprehenderit dolore aliqua eiusmod. Ipsum in est ullamco fugiat excepteur nulla.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"innovate clicks-and-mortar relationships"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Enhance real-time relationships","spans":[]}],"text":[{"type":"paragraph","text":"Excepteur est consequat deserunt ad aliquip. Laborum do non officia ea ea nulla id deserunt esse elit voluptate ad. Pariatur minim exercitation excepteur culpa laborum dolore aute pariatur nisi dolor exercitation amet nulla fugiat.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaLabel":"mesh cross-platform communities"}],"primary":{"tagline":"exploit visionary vortals","title":[{"type":"heading2","text":"Transform cross-platform synergies","spans":[]}],"text":[{"type":"paragraph","text":"Commodo irure tempor eiusmod laboris consequat do in nostrud sit culpa commodo mollit eiusmod Lorem cupidatat. Minim quis fugiat commodo irure mollit.","spans":[]}]},"id":"_CenteredSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_CenteredSecondary.storyName = 'Center / Secondary'
