import error404 from 'components/png404/error404.png';

export default function NotFound() {
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          paddingTop: '70px',
          height: '100vh',
          width: '100vw',
        }}
      >
        <h1>Page not found, try later!</h1>
        <img src={error404} alt="not found" width={'100%'} />
      </div>
    </>
  );
}
