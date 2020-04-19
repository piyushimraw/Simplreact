import { nextUnitOfWork, performSomeUnitOfWork } from './'
import { RequestIdleCallbackDeadline } from '../../types/requestIdleCallBack'

function workLoop(deadline: RequestIdleCallbackDeadline) {
  let shouldYield = false
  // do some work until time allows
  while (nextUnitOfWork.getNextUnitOfWork() || !shouldYield) {
    // perform some unit of work
    const newNextUnitOfWork = performSomeUnitOfWork(nextUnitOfWork.getNextUnitOfWork())
    // set next unit of work
    nextUnitOfWork.setNextUnitOfWork(newNextUnitOfWork)
    //check if more time is remaining
    shouldYield = deadline.timeRemaining() < 1
  }
  // schedule next unit of work
  window.requestIdleCallback(workLoop)
}

window.requestIdleCallback(workLoop)
