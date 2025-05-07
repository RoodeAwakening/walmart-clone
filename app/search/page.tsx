type Props = {
    searchParams: {
        q: string;
    }
}

function SearchPage({searchParams: {q}}: Props) {
    console.log(q)
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage