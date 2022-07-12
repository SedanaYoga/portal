// Import Library
import { db } from './firebase.init'
import { collection, getDocs } from 'firebase/firestore'
import { timeStampToDateString } from '../helper/date.helper'

// Collection Definition
const worksCollectionRef = collection(db, 'works')

// FIRESTORE - Utils Function
export const getWorksData = async () => {
  try {
    const worksDocs = await getDocs(worksCollectionRef)
    const works = worksDocs.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
        addedAt: timeStampToDateString(doc.data().addedAt),
      }
    })
    return works
  } catch (err) {
    return { error: 'Something wrong when retrieving data' }
  }
}
