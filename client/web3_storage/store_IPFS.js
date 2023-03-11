import process from 'process'
import minimist from 'minimist'
import readline from 'readline'
import { Web3Storage, getFilesFromPath } from 'web3.storage'

async function main (token) {
    var path = '/test.txt'
  const args = minimist(process.argv.slice(2))

  if (args._.length < 1) {
    return console.error('Please supply the path to a file or directory')
  }

  const storage = new Web3Storage({ token })
  const files = []

  for (const path of args._) {
    const pathFiles = await getFilesFromPath(path)
    files.push(...pathFiles)
  }

  console.log(`Uploading ${files.length} files`)
  const cid = await storage.put(files)
  console.log('Content added with CID:', cid)
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// const fileInput = document.getElementById('fileInput')
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGI1M0Q3NmM0Yjg1RDIzQjYwMDMwNzNFNDAxMDc1NzkxNWJFOTc1OTIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzg1MDg1NDY2NjYsIm5hbWUiOiJTYW5rZXRfd2ViMyJ9.WsuJ3oCu2S1BlllSFEqdfH7ihebReY8MN2aGRH7yw_A'
rl.question('Enter your Web3.Storage token: ', async (token) => {
  rl.close()
  await main(token)
})
