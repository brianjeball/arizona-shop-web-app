import Image from 'next/image';

const Homepage = () => {
    return (

        <div style={{overflow: 'hidden', height: '100%', width: '100%'}}>
          <div className="fixed" style={{zIndex: '101',
            // height: '200px',
            margin: '5% auto', textAlign: 'center',
            left: 0,
            right: 0,}}>
            <Image
              src="/assets/images/arizona title.png" alt='catch22 cover art' width={300} height={300}
                />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '0 12%'}}>
            <Image
              src="/assets/images/basketball.png" alt='catch22 cover art' width={50} height={50} />
            <Image
              src="/assets/images/basketball.png" alt='catch22 cover art' width={50} height={50} />
            <Image
              src="/assets/images/basketball.png" alt='catch22 cover art' width={50} height={50} />
          </div>

          <div className="base">
            <div className="holder"></div>
            <div className="thread">
              <div className="knob"></div>
              <div className="pendulum">
              <Image
              src="/assets/images/pendants/arizona-pendant.png" alt='catch22 cover art' width={700} height={700} />
              </div>
            </div>
            <div className="shadow"></div>
          </div>

          <div style={{
            // minHeight: '80vh',
            margin: '0 12%'}}>
            <div style={{display: 'flex'}}>
              <Image
                src="/assets/images/pendants/arizona-pendant-bw-min.png" alt='catch22 cover art' width={700} height={700} />
              <Image
                src="/assets/images/pendants/arizona-pendant-min.png" alt='catch22 cover art' width={700} height={700} />
              <Image
                src="/assets/images/pendants/arizona-pendant-colorful-min.png" alt='catch22 cover art' width={700} height={700} />
            </div>
          {/* <div style={{display: 'flex', flexDirection: 'column', padding: '12%', height: 400}}>
            <div className='absolute z-30 center my-0 mx-auto'>
            <Image
              src="/assets/images/new-backgrounds/front-cover-arizona-title.png" alt='catch22 cover art' width={400} height={400} />
            </div>
            <div className=' absolute z-30 center my-0 mx-auto'>
            <Image
              src="/assets/images/new-backgrounds/front-cover-player.png" alt='catch22 cover art' width={400} height={400} />
            </div>
            <div className='absolute z-10 center my-0 mx-auto'>
            <Image
              src="/assets/images/new-backgrounds/front-cover-background.jpg" alt='catch22 cover art' width={400} height={400} />
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', padding: '12%', height: 400}}>
              <div className='absolute z-40 center my-0 mx-auto'>
              <Image
                src="/assets/images/new-backgrounds/back-cover-background.jpg" alt='catch22 cover art' width={400} height={400} />
              </div>
              <div className='absolute z-40 center my-0 mx-auto'>
              <Image
                src="/assets/images/new-backgrounds/back-cover-text-without-songs.png" alt='catch22 cover art' width={400} height={400} />
              </div>
            </div> */}
          </div>
        </div>

    )
}

export default Homepage;
