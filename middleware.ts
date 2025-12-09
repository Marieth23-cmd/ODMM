 import { languages } from "@/Constants/languages";
import createMiddleware from "next-intl/middleware";

 export default createMiddleware({
    locales:languages,
    defaultLocale:'pt'

 })

 export const config ={
    matcher:['/' , '/(pt|en|fr)/:path*']
 }