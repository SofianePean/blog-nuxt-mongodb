import { store } from "vuex";
export default function(context) {
  let userAgent = context.req.headers["user-agent"];
  context.isMobile = /mobile/i.test(userAgent);
  context.store.commit("home/changeIsMobileOrNot", context.isMobile);
  console.log("USER AGENT", context.isMobile);
}