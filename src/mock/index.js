import { mock } from "mockjs";
import foodData from "./data/foodData.json"

mock('/mock/foodData', {code: 200, data: foodData})