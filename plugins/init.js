import Vue from 'vue';
import {mapGetters, mapMutations, mapActions} from 'vuex'
import {merge, hasValue} from '@/common/utils/utils'
import {$axios} from '@/network/base/axios'
import mock from '@/network/mockNetWork'

Vue.mixin({
  components: {},
  props: {},
  data() {
    return {}
  },

  computed: {
    // ...mapGetters(['user'])
  },
  watch: {},
  created() {
  },
  mounted() {

  },
  activited() {
  },
  update() {
  },
  destroyed() {
  },
  methods: {
    hasValue(val) {
      return hasValue(val)
    },
    merge(obj, option) {
      return merge(obj, option)
    },
    go({path, query}) {
      console.log(path);
      this.$router.push({
        path: path,
        query: query
      })
    },
    appReady(cb) {
      this.setUser({
        "code": "1",
        "openid": "2",
        "unionId": "3",
        "sourceType": "4",
        "id": "5",
        "agentName": "6",
        "agentType": "7",
        "phone": "8",
        "isLeader": "9",
        "verificationCode": "10",
        "agree": true,
        "withdrawStatus": 0
      });
      !!cb && cb()
    },
    ...mapMutations('ModuleUser', ['setUser']),
    // ...mapActions(['alert', 'wait', 'confirm'])
  },
  filter: {},
});
Vue.prototype.$axios = $axios
if (process.env.NODE_ENV !== 'production') {
  Vue.use(mock)
}
