import HomePage from "@/pages/HomePage.vue"
import WorkPage from "@/pages/WorkPage.vue"
import AgencyPage from "@/pages/AgencyPage.vue"
import NotFound from "@/pages/NotFound.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/work",
    name: "Work",
    component: WorkPage,
  },
  {
    path: "/agency",
    name: "Agency",
    component: AgencyPage,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
]

export default routes
