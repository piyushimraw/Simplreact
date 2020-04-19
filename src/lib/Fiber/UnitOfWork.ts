interface IUnitOfWork {
  nextUnitOfWork: null | any
  getNextUnitOfWork(): null | any
  setNextUnitOfWork(unitOfWork: null | any): void
}

class NextUnitOfWork implements IUnitOfWork {
  nextUnitOfWork = null
  getNextUnitOfWork() {
    return this.nextUnitOfWork
  }
  setNextUnitOfWork(unitOfWork: null | any) {
    this.nextUnitOfWork = unitOfWork
  }
}

export const nextUnitOfWork = new NextUnitOfWork()
