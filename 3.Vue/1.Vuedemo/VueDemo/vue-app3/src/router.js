import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Learn from './views/Learn.vue'
// import Student from './views/Student.vue'
// import About from './views/About.vue'
// import Community from './views/Community.vue'

// import Academic from './components/community/Academic'
// import Download from './components/community/Download'
// import Personal from './components/community/Personal'

// import Question from './components/Question'
// import Err from './components/Err'

const Home = () => import('./views/Home')
const Learn = () => import('./views/Learn')
const Student = () => import('./views/Student')
const About = () => import('./views/About')
const Community = () => import('./views/Community')

const Academic = () => import('./components/community/Academic')
const Download = () => import('./components/community/Download')
const Personal = () => import('./components/community/Personal')

const Question = () => import('./components/Question')
const Err = () => import('./components/Err')
const ChanegCourse = () => import('./components/ChangeCourse')


Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact',
  routes: [
    {
      path: '/home',
      name: 'home',
      // alias: '/home',
      components: {
        default: Home,
        // 'academic': Academic
      }
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/community',
      name: 'community',
      component: Community,
      redirect: '/community/academic',
      meta: {
        login: false
      },
      children: [
        {
          path: 'academic',
          name: 'academic',
          component: Academic,
          // 路由独享守卫
          // beforeEnter (to, from, next) {
          //   const answer = confirm('你还没有登陆，要登陆后才能浏览信息，要登陆嘛？');

          //   if(answer) {
          //     next({name: 'personal'})
          //   } else {
          //     next(false);
          //   }
          // }
        },
        {
          path: 'download',
          name: 'download',
          component: Download
        },
        {
          path: 'personal',
          name: 'personal',
          component: Personal
        }
      ]
    },
    {
      path: '/question/:id',
      name: 'question',
      component: Question
    },
    {
      path: '/err.html',
      name: 'err',
      component: Err
    },
    {
      path: '/learn/changeCourse',
      name: 'changeCourse',
      component: ChanegCourse
    },
    {
      path: '*',
      redirect (to) {
        if(to.path == '/') {
          return '/home'
        } else {
          return {name: 'err'}
        }
      }
    }
  ]
})

// 导航守卫
// 1. 全局守卫
// router.beforeEach( (to, from, next) => {

//   if(to.path === '/community/academic') {
  
//     const answer = confirm('你还没有登陆，要登陆后才能浏览信息，要登陆嘛？');

//     if(answer) {
//       next({name: 'personal'})
//     } else {
//       next(false);
//     }

//   } else {
//     next();
//   }

// })



export default router;
