function main(args) {
    let name = args.name || 'stranger'
    let greeting = 'Hello ' + process.env.USER + '!'
    console.log(greeting)
    return {"body": greeting}
  }
  
