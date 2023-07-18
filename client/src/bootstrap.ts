import { Router } from "vue-router";

import { bootstrapProject } from "./views/project/bootstrap";
import { bootstrapHome } from "./views/home/bootstrap";
import { bootstrapAdmin } from "./views/admin/bootstrap";
import { bootstrapAuth } from "./views/auth/bootstrap";

export function bootstrap(router: Router) {
	bootstrapAuth(router);
	bootstrapHome(router);
	bootstrapProject(router);
	bootstrapAdmin(router);
	return router;
}