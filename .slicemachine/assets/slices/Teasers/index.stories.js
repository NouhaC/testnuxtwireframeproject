import MyComponent from '../../../../slices/Teasers';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Teasers'
}


export const _Primary = () => ({
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
      mock: {"variation":"primary","name":"Primary colors","slice_type":"teasers","items":[{"image":{"dimensions":{"width":1000,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=1000&h=500&fit=crop"},"title":[{"type":"heading3","text":"Streamline holistic ROI","spans":[]}],"text":[{"type":"paragraph","text":"Adipisicing incididunt laborum ut sit sint velit voluptate exercitation est proident laborum nisi laborum cillum. Tempor culpa veniam enim consequat commodo sint eu officia mollit. Sunt duis eiusmod excepteur.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaLabel":"syndicate plug-and-play metrics"},{"image":{"dimensions":{"width":1000,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1000&h=500&fit=crop"},"title":[{"type":"heading3","text":"Unleash ubiquitous partnerships","spans":[]}],"text":[{"type":"paragraph","text":"Et do consectetur do occaecat magna excepteur anim.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"envisioneer best-of-breed supply-chains"},{"image":{"dimensions":{"width":1000,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=1000&h=500&fit=crop"},"title":[{"type":"heading3","text":"Recontextualize holistic relationships","spans":[]}],"text":[{"type":"paragraph","text":"Est non quis eiusmod aute laborum ullamco reprehenderit voluptate ea sit. Culpa Lorem quis aliquip commodo amet aliqua Lorem dolore aliqua consequat. Tempor reprehenderit est proident anim in nulla culpa ad est ex.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"productize proactive e-commerce"},{"image":{"dimensions":{"width":1000,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1000&h=500&fit=crop"},"title":[{"type":"heading3","text":"Grow visionary niches","spans":[]}],"text":[{"type":"paragraph","text":"Excepteur quis laboris proident exercitation ad officia sint in anim do ipsum. Duis anim laboris officia veniam aute consequat Lorem sunt labore non esse laborum ex laborum.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaLabel":"whiteboard open-source solutions"}],"primary":{"tagline":"integrate B2C communities","title":[{"type":"heading2","text":"Aggregate 24/7 ROI","spans":[]}]},"id":"_Primary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Primary.storyName = 'Primary colors'

export const _Secondary = () => ({
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
      mock: {"variation":"secondary","name":"Secondary colors","slice_type":"teasers","items":[{"image":{"dimensions":{"width":1000,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=1000&h=500&fit=crop"},"title":[{"type":"heading3","text":"Facilitate vertical web services","spans":[]}],"text":[{"type":"paragraph","text":"Esse Lorem voluptate occaecat fugiat dolore exercitation mollit tempor veniam aliqua ea ex nisi. Dolor aute exercitation nisi cupidatat in minim consequat adipisicing pariatur. Ex consectetur culpa aliquip Lorem sit dolore ea do aute magna anim aliqua fugiat ex commodo.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaLabel":"incubate seamless interfaces"},{"image":{"dimensions":{"width":1000,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1000&h=500&fit=crop"},"title":[{"type":"heading3","text":"Cultivate best-of-breed supply-chains","spans":[]}],"text":[{"type":"paragraph","text":"Elit pariatur laboris veniam irure exercitation. Reprehenderit labore non ea cupidatat enim eu commodo nisi nisi excepteur officia aliquip.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"matrix frictionless web services"},{"image":{"dimensions":{"width":1000,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=1000&h=500&fit=crop"},"title":[{"type":"heading3","text":"Implement open-source mindshare","spans":[]}],"text":[{"type":"paragraph","text":"Fugiat Lorem quis officia ad irure reprehenderit reprehenderit cillum ut veniam occaecat ex ea. Incididunt deserunt do reprehenderit adipisicing id.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"synthesize collaborative schemas"},{"image":{"dimensions":{"width":1000,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=1000&h=500&fit=crop"},"title":[{"type":"heading3","text":"Orchestrate cross-media deliverables","spans":[]}],"text":[{"type":"paragraph","text":"Non cillum cupidatat amet eu amet fugiat nulla aute anim esse nulla.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaLabel":"e-enable sticky mindshare"}],"primary":{"tagline":"expedite bricks-and-clicks e-commerce","title":[{"type":"heading2","text":"Deploy customized e-markets","spans":[]}]},"id":"_Secondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Secondary.storyName = 'Secondary colors'
