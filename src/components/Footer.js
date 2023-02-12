import '../styles/footer.scss';

export default function Footer() {
  return (
    <div>
      <footer
          id="footer"
          className="bg-dark text-white d-flex-column text-center"
        >
          <hr className="mt-0" />

          <div className="text-center">
            <a href="https://info08.github.io/my-portfolio/" rel="noreferrer" target="_blank" >&nbsp;Click and Get Details About me</a>
           </div> 

          <hr className="mb-0" />

          <div className="py-3 text-center">
            Copyright
            <a href="https://info08.github.io/NewsGhost/general" rel="noreferrer" target="_blank" >&nbsp;@NewsGhost</a> | It is free for use
          </div>
        </footer>
    </div>
  )
}

