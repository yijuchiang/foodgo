import { mock } from "mockjs";
import foodData from "./data/foodDate.json"

mock('/mock/foodData', {code: 200, data: foodData})