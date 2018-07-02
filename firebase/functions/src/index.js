import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

// https
import * as SendGrid from './https/sendGrid'
// import * as ShopifyAdmin from './https/shopifyAdmin'


admin.initializeApp()


export const sendGrid = SendGrid.listener
// export const shopifyAdmin = ShopifyAdmin.listener
