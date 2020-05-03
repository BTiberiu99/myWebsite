import { RouteConfig } from 'vue-router'
import { VNode } from 'vue'
import AuthMiddleware from '../middlewares/auth'
const ProjectsList = () => import(/* webpackChunkName: "projects" */ 'src/pages/projects/ProjectsList.vue')
const ProjectsEdit = () => import(/* webpackChunkName: "projects" */ 'src/pages/projects/ProjectsEdit.vue')
const ProjectsNew = () => import(/* webpackChunkName: "projects" */ 'src/pages/projects/ProjectsNew.vue')
const Home = () => import(/* webpackChunkName: "home" */ 'src/pages/Home.vue')
export default ([
  {
    name: 'dashboard',
    path: '/dashboard',
    component: { render (h): VNode { return h('router-view') } },
    redirect: { name: 'home' },
    meta: {
      layout: 'app',
      middleware: {
        attach: [AuthMiddleware]
      }
    },
    children: [
      {
        name: 'home',
        path: 'home',
        component: Home,
        meta: {
          layout: 'app',
          middleware: {
            attach: [AuthMiddleware]
          }
        }
      },
      {
        name: 'projects',
        path: 'projects',
        component: ProjectsList,
        meta: {
          layout: 'app',
          middleware: {
            attach: [AuthMiddleware]
          }
        },
      },
      {
        name: 'project-show',
        path: 'project/:id',
        component: ProjectsEdit,
        meta: {
          layout: 'app',
          middleware: {
            attach: [AuthMiddleware]
          }
        },
      },
      {
        name: 'project-new',
        path: 'project/new',
        component: ProjectsNew,
        meta: {
          layout: 'app',
          middleware: {
            attach: [AuthMiddleware]
          }
        },
      },
      {
        name: 'project-edit',
        path: 'project/edit/:id',
        component: ProjectsNew,
        meta: {
          layout: 'app',
          middleware: {
            attach: [AuthMiddleware]
          }
        },
      }
    ]
  },

]) as Array<RouteConfig>
