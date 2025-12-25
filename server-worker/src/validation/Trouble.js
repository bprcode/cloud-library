// Thin error-list class designed to mimic the interace of express-validator
export class Trouble {
  issues = []

  isEmpty() {
    return this.issues.length === 0
  }

  array() {
    return this.issues
  }

  add(param, msg) {
    this.issues.push({param, msg})
  }
}