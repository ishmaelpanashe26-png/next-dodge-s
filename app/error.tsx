export default function Error({ error }: { error: Error }) {
  console.error(error)
  return (
    <div className="prose">
      <h1>Something went wrong</h1>
      <pre>{error.message}</pre>
    </div>
  )
}
