import './Envshell.css';

function Envshell() {
  return (
	<div id="envshell-envshell">
		<div id="envshell-hero">
			<div id="envshell-hero-gradient">
				<div class="envshell-floating-images">
					<img src="/src/assets/envshell/about.png" alt="About" class="floating-image" />
					<img src="/src/assets/envshell/busy-dock.png" alt="Busy Dock" class="floating-image" />
					<img src="/src/assets/envshell/cc.png" alt="Control Center" class="floating-image" />
					<img src="/src/assets/envshell/desert.png" alt="Desert" class="floating-image" />
					<img src="/src/assets/envshell/volume.png" alt="Volume" class="floating-image" />
				</div>
				<div id="envshell-hero-content">
					<h1 id="envshell-hero-title">envShell</h1>
					<p id="envshell-hero-subtitle">Simplicity, Aesthetics, Functionality</p>
				</div>
			</div>
		</div>
		<div id="envshell-what">
			<div id="envshell-what-content">
				<div id="envshell-what-description">
					<h2 className="font-mono text-[2em] text-white font-bold">What is envShell?</h2>
					<p>envShell is a shell for Hyprland, designed with simplicity and aesthetics in mind.</p>
					<p>It tries to mimic the look and feel of the macOS Shell.</p>
				</div>
				<div id="envshell-what-screenshot">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-1.png" alt="Screenshot 1" class="screenshot" />
					<p>All powered by <a href="https://github.com/Fabric-Development/fabric">Fabric</a></p>
				</div>
			</div>
		</div>
		<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-2.png" alt="Screenshot 2" class="screenshot" />
		<h1 class="font-mono text-[2em] text-white font-bold">Features</h1>
		<div class="envshell-feature-container">
			<div class="envshell-feature">
				<div class="envshell-feature-title">
					envControlCenter is a sleek and intuitive control center for Hyprland,
					offering quick access to essential system settings and information.
					With a polished UI, it seamlessly integrates into your workflow,
					providing controls for volume, brightness, network, Bluetooth, and more.
				</div>
				<div class="envshell-feature-description"><img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-new-cc.png" alt="Screenshot of the new Control Center" class="screenshot" /></div>
			</div>
			<div class="envshell-feature">
				<div class="envshell-feature-description"><img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-bluetooth.png" alt="Screenshot of the Bluetooth window" class="screenshot" /></div>
				<div class="envshell-feature-title">
					The Bluetooth Window in envShell streamlines Bluetooth management with a user-friendly
					interface for connecting and managing devices, featuring discovery, status indicators,
					and quick toggles for an efficient experience.
				</div>
			</div>
			<div class="envshell-feature">
				<div class="envshell-feature-title">
					App Launcher is a fast and efficient way to search and open applications within envShell.
					Featuring a clean list view and fuzzy search,
					it enhances productivity while maintaining a lightweight and responsive experience.
				</div>
				<div class="envshell-feature-description">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-launcher.png" alt="Screenshot of the launcher" class="screenshot" />
					<p class="envshell-tag envshell-warning" title="Features, promised in the description might not be implemented, or won't work correctly">Still in development</p>
				</div>
			</div>
			<div class="envshell-feature">
				<div class="envshell-feature-description">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-osd.png" alt="Screenshot of the OSD server" class="screenshot" />
					<p class="envshell-tag envshell-warning" title="Features, promised in the description might not be implemented, or won't work correctly">Still in development</p>
				</div>
				<div class="envshell-feature-title">
					envOSD is a lightweight on-screen display (OSD) service for envShell,
					providing smooth and visually consistent notifications for system events in Hyprland.
					With a macOS-inspired design, it ensures non-intrusive yet
					informative feedback through elegant animations and adaptive positioning.
				</div>
			</div>
			<div class="envshell-feature">
				<div class="envshell-feature-title">
					envSystray is a modern and lightweight system tray for envShell,
					integrated into the Panel with a clean and organized design.
					It supports tray icons and quick interactions, making it easy to access
					background applications and system indicators without cluttering the desktop.
				</div>
				<div class="envshell-feature-description"><img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-systray.png" alt="Screenshot of the System Tray" class="screenshot" /></div>
			</div>
			<div class="envshell-feature envshell-top-feature">
				<div class="envshell-feature-title">
					envDock <br />is a stylish and functional macOS-style dock for envShell,
					providing a seamless application launching and window management experience in Hyprland.
					It supports pinning favorite applications and displaying running apps.
				</div>
				<div class="envshell-feature-description envshell-big">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-left-dock-full.png" alt="Screenshot of the Dock at the left side, filling the side" class="screenshot" />
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-left-dock-center.png" alt="Screenshot of the Dock at the left side, floating" class="screenshot" />
					<video src="./dock.mp4" autoplay loop muted class="screenshot" onclick="this.play()"></video>
				</div>
			</div>
		</div>
		<div class="envshell-screenshot-wrapper">
			<h1>Screenshots</h1>
			<div class="envshell-screenshot-container">
				<div class="envshell-screenshot-container-image">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-3.png" alt="Screenshot 3" class="screenshot" />
					<p>Abstract Wallpaper</p>
				</div>
				<div class="envshell-screenshot-container-image">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-4.png" alt="Screenshot 4" class="screenshot" />
					<p>Flower pattern Wallpaper</p>
				</div>
				<div class="envshell-screenshot-container-image">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-5.png" alt="Screenshot 5" class="screenshot" />
					<p>Fish Wallpaper</p>
				</div>
				<div class="envshell-screenshot-container-image">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-6.png" alt="Screenshot 6" class="screenshot" />
					<p>Miniature Bonsai Wallpaper</p>
				</div>
			</div>
		</div>
	</div>
  );
}

export default Envshell;