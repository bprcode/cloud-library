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
    log('⚠️ ', param, yellow, ' had trouble: ', msg, yellow)
    this.issues.push({param, msg})
  }
}