function Homepage() {
  return (
    <div className='bg-[#010101]'>
		<div
			id="hero"
			className="pt-20 bg-[#010101] bg-[length:40px_40px] bg-[linear-gradient(to_right,_#0d0d0d_1px,transparent_1px),linear-gradient(to_bottom,_#0d0d0d_1px,transparent_1px)]"
		>
			<div id="hero-gradient" className="h-[100vh] flex justify-center items-center">
				<div id="hero-content" className="text-center">
					<h1 id="hero-title" className="font-mono text-[4em] text-white font-bold max-w-[700px]">Quality Design & Web Development</h1>
					<p id="hero-subtitle" className="text-[1rem] max-w-[800px] opacity-60">Hi, I'm Enviction. I create intuitive, visually stunning and highly functional web applications</p>
					<div className="mt-8 flex gap-4 justify-center">
						<a href="/projects" className="btn primary">View Projects</a>
						<a href="https://github.com/E3nviction" className="btn secondary">GitHub</a>
					</div>
				</div>
			</div>
		</div>
		<div id="about">
			<div id="about-content" className="p-12 rounded-lg max-w-[1200px] mx-auto">
				<h1 className="font-mono text-[2em] text-white font-bold">Skills</h1>
				<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 max-w-[1200px]">
					<span class="tag">
						<h4><i class="fab fa-linux text-white"></i>Linux</h4>
						<span>My Operating System</span>
					</span>
					<span class="tag">
						<h4><i class="fa fa-code text-[#00D0DC]"></i>Hyprland</h4>
						<span>My tiling window manager</span>
					</span>
					<span class="tag">
						<h4><i className="fab fa-python text-[#3776AB]"></i>Python</h4>
						<span>For Data Analysis and More...</span>
					</span>
					<span class="tag">
						<h4><i className="fab fa-golang text-[#00ADD8]"></i>Go</h4>
						<span>For simple CLI tools</span>
					</span>
					<span class="tag">
						<h4><i className="fab fa-js text-[#f7df1e]"></i>JS</h4>
						<span>For simple web apps</span>
					</span>
					<span class="tag">
						<h4><i className="fab fa-react text-[#61DAFB]"></i>React</h4>
						<span>For advanced web apps</span>
					</span>
					<span class="tag">
						<h4><i className="fab fa-rust text-[#E34C26]"></i>Rust</h4>
						<span>For rendering and computation</span>
					</span>
					<span class="tag">
						<h4><i className="fab fa-swift text-[#F05338]"></i>Swift</h4>
						<span>For macOS thingies</span>
					</span>
					<span class="tag">
						<h4><i className="fab fa-css3 text-[#1572B6]"></i>CSS</h4>
						<span>for styling websites</span>
					</span>
					<span class="tag">
						<h4><i className="fab fa-html5 text-[#E34C26]"></i>HTML</h4>
						<span>For structuring websites</span>
					</span>
					<span class="tag">
						<h4><i className="fa-solid fa-database text-[#ffec5c]"></i>SQL</h4>
						<span>For Database Management</span>
					</span>
				</div>
			</div>
    	</div>
		<div id="projects" className="p-12 rounded-lg max-w-[1200px] mx-auto">
			<h1 className="font-mono text-[2em] text-white font-bold">Projects</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
				<div className="project">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-1.png" alt="Project Image"/>
					<h2 className="project-title">EnvShell</h2>
					<p className="project-description">A shell designed for Hyprland with macOS-inspired aesthetics.</p>
					<div class="project-links">
						<a href="/envshell" class="btn small primary">Website</a>
						<a href="https://github.com/E3nviction/envshell" class="btn small secondary">GitHub</a>
					</div>
				</div>
				<div class="project">
					<h2 className="project-title">React/Electron Boilerplate</h2>
					<p className="project-description">A boilerplate for React + Electron applications.</p>
					<div class="project-links">
						<a href="https://github.com/E3nviction/react-electron-boilerplate" class="btn small primary">GitHub</a>
					</div>
				</div>
				<div class="project">
					<h2 className="project-title">GoTasks</h2>
					<p className="project-description">A simple task manager built with Go.</p>
					<div class="project-links">
						<a href="https://github.com/E3nviction/GoTasks" class="btn small primary">GitHub</a>
					</div>
				</div>
			</div>
		</div>
    </div>
  );
}

export default Homepage;