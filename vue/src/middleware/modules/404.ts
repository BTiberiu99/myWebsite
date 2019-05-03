import store from "@/store/";
import { Route, NavigationGuard } from "vue-router";
import { Next } from "@/types";
export default function verify(
  to: Route,
  from: Route,
  next: Next
): NavigationGuard {
  if (store.getters["auth/is_auth"]) {
    to.meta.layout = "app-layout";
  }
  return next();
}