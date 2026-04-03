import './style.scss'

export default function Newsletter() {
  return (
    <section className='flex_center newssletter'>
      <div className='w_1280 flexrow_center_between newssletter_container'>
        <div className='newssletter_left_content'>
          <h3>Inscreva-se na nossa newsletter</h3>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>
        <div className='newssletter_right_content'>
          <form >
            <input type="text" placeholder='Digite seu nome' />
            <input type="text" placeholder='Digite seu e-mail' />
            <input type="submit" value="INSCREVER" />
          </form>
          <div className='checkbox'>
            <input type="checkbox" />
            <span>Aceito os termos e condições</span>
          </div>
        </div>
      </div>
    </section>
  )
}
