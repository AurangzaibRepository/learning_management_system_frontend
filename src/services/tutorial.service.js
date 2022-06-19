import http from "../http-common";

class TutorialService {

    Listing() {
        return http.get("/tutorials");
    }

    create(data) {
        return http.post("/tutorials", data);
    }
}

export default new TutorialService();