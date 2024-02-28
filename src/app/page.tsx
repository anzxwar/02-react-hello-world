import Image from "next/image";

function MyTextNimName() {
  return (
    // <button> 2341728026 - Anwar Alif Katresna </button>
      <h1>
        {user.name}
      </h1>
      
  );
}

const user = {
  name: '2341728026 - Anwar Alif Katresna',
  imageUrl: 'data:image/jpeg;base64,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',
  imageSize: 90,
};


function MyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {/* Anwar Alif Katresna  */}
        </p>
        <MyTextNimName />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}



export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <MyPage />  
    </>
  );
}

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Selamat datang di aplikasi saya</h1>
//       <MyPage />
//       <MyTextNimName />
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           {/* Anwar Alif Katresna  */}
//         </p>
        
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore starter templates for Next.js.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }

