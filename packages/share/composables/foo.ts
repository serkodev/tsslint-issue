export function useFoo(cb: (e?: DragEvent) => void) {
  cb()
}

useFoo((e) => {
  if (e) {
    // expected tsslint error here
    console.log(e.dataTransfer)
  }
})
