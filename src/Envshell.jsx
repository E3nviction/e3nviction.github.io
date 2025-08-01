import './Envshell.css';

function Envshell() {
  return (
	<div id="envshell-envshell">
		<div id="envshell-hero">
			<div id="envshell-hero-gradient">
				<div class="envshell-floating-images">
					<img src="https://raw.githubusercontent.com/E3nviction/e3nviction.github.io/refs/heads/master/src/assets/envshell/about.png" alt="About" class="envshell-floating-image" />
					<img src="https://raw.githubusercontent.com/E3nviction/e3nviction.github.io/refs/heads/master/src/assets/envshell/busy-dock.png" alt="Busy Dock" class="envshell-floating-image" />
					<img src="https://raw.githubusercontent.com/E3nviction/e3nviction.github.io/refs/heads/master/src/assets/envshell/cc.png" alt="Control Center" class="envshell-floating-image" />
					<img src="https://raw.githubusercontent.com/E3nviction/e3nviction.github.io/refs/heads/master/src/assets/envshell/desert.png" alt="Desert" class="envshell-floating-image" />
					<img src="https://raw.githubusercontent.com/E3nviction/e3nviction.github.io/refs/heads/master/src/assets/envshell/volume.png" alt="Volume" class="envshell-floating-image" />
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
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-new-1.png" alt="Screenshot 1" class="envshell-screenshot" />
					<p>All powered by <a href="https://github.com/Fabric-Development/fabric">Fabric</a></p>
				</div>
			</div>
		</div>
		<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-2.png" alt="Screenshot 2" class="envshell-screenshot" />
		<h1 class="font-mono text-[2em] text-white font-bold pt-16">Features</h1>
		<div class="envshell-feature-container">
			<div class="envshell-feature">
				<div class="envshell-feature-title">
					envControlCenter is a sleek and intuitive control center for Hyprland,
					offering quick access to essential system settings and information.
					With a polished UI, it seamlessly integrates into your workflow,
					providing controls for volume, brightness, network, Bluetooth, Music, and more.
				</div>
				<div class="envshell-feature-description"><img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-new2-cc.png" alt="Screenshot of the new Control Center" class="envshell-screenshot" /></div>
			</div>
			<div class="envshell-feature">
				<div class="envshell-feature-description"><img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-new-bluetooth.png" alt="Screenshot of the Bluetooth window" class="envshell-screenshot" /></div>
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
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-launcher.png" alt="Screenshot of the launcher" class="envshell-screenshot" />
					<p class="envshell-tag envshell-warning" title="Features, promised in the description might not be implemented, or won't work correctly">Still in development</p>
				</div>
			</div>
			<div class="envshell-feature">
				<div class="envshell-feature-description">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-osd.png" alt="Screenshot of the OSD server" class="envshell-screenshot" />
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
				<div class="envshell-feature-description"><img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-systray.png" alt="Screenshot of the System Tray" class="envshell-screenshot" /></div>
			</div>
			<div class="envshell-feature">
				<div class="envshell-feature-title">
					Now with mod support! Using a simple syntax directly inside your config file, you can now create list type dropdown menus and add them to the top panel. <a href="https://github.com/E3nviction/envshell/blob/master/docs/mods/mods.md">Read more</a>
				</div>
				<div class="envshell-feature-description"><img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-mod.png" alt="Screenshot of the System Tray" class="envshell-screenshot" /></div>
				<div class="envshell-feature-description"><img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-mod-code.png" alt="Screenshot of the System Tray" class="envshell-screenshot" /></div>
			</div>
			<div class="envshell-feature">
				<div class="envshell-feature-description"><img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-notifications.png" alt="Screenshot of 2 Notifications" class="envshell-screenshot" /></div>
				<div class="envshell-feature-title">
					envNotificationCenter, is a simple notification center, where users can easily manage notifications.
					It provides a clean design, allowing users to view, dismiss, and interact with notifications seamlessly.
					<br/>(Click on the clock to open the notification center)
				</div>
				<div class="envshell-feature-description"><img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-notificationcenter.png" alt="Screenshot of the Notification Center" class="envshell-screenshot" /></div>
			</div>
			<div class="envshell-feature">
				<div class="envshell-feature-title">
					The new envMusicPlayer is a modern and lightweight music player for envShell,
					providing a smooth and visually consistent user interface for managing and controlling music playlists.
				</div>
				<div class="envshell-feature-description"><img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-new-cc-player.png" alt="Screenshot of the New Music Player of the Control Center" class="envshell-screenshot small" /></div>
			</div>
			<div class="envshell-feature">
				<div class="envshell-feature-description"><img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-new-launcher.png" alt="Screenshot of the New Launcher" class="envshell-screenshot" /></div>
				<div class="envshell-feature-title">
					envLightV2 is our new and improved version of envLight, your personal computer's Flashlight.
					It is designed to be lightweight and fast, with a clean and modern interface.
					It allows you to quickly search for any apps.
				</div>
			</div>
			<div class="envshell-feature">
				<div class="envshell-feature-title">
					But wait, envLightV2 also now supports Extensions!
					You can now create your own extensions and add them to envLightV2.
					You can create your own extensions using a simple configuration system directly inside your config file.
					<br/><br/>This is a simple Wikipedia extension, which allows you to search for any Wikipedia article:
					<div class="envshell-feature-description w-full! zoomable"><img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-new-launcher-code.png" alt="Screenshot of the New Launcher Extension's Code" class="envshell-screenshot" /></div>
				</div>
				<div class="envshell-feature-description"><img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-new-launcher-plugin.png" alt="Screenshot of the New Launcher Extensions" class="envshell-screenshot" /></div>
			</div>
			<div class="envshell-feature">
				<div class="envshell-feature-title">
					Dont like the design? No, problem! We now ship with a new Glass like design. <br/> Available at: <a href="https://github.com/E3nviction/envshell/tree/tahoe">envShell Tahoe</a>
				</div>
				<div class="envshell-feature-description"><img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/tahoe/assets/screenshot-tahoe.png" alt="Screenshot of the New Glass Design" class="envshell-screenshot" /></div>
				<div style={{marginLeft: "20px"}}/>
				<div class="envshell-feature-description">
					But not only that, we also have added a new type of Notch!
				</div>
				<div class="envshell-feature-description"><img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/tahoe/assets/screenshot-island-notch.png" alt="Screenshot of the New Glass Design with a Notch" class="envshell-screenshot" /></div>
			</div>
			<div class="envshell-feature envshell-top-feature">
				<div class="envshell-feature-title">
					envDock <br />is a stylish and functional macOS-style dock for envShell,
					providing a seamless application launching and window management experience in Hyprland.
					It supports pinning favorite applications and displaying running apps.
				</div>
				<div class="envshell-feature-description envshell-big">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-left-dock-full.png" alt="Screenshot of the Dock at the left side, filling the side" class="envshell-screenshot" />
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-left-dock-center.png" alt="Screenshot of the Dock at the left side, floating" class="envshell-screenshot" />
					<video src="https://raw.githubusercontent.com/E3nviction/e3nviction.github.io/refs/heads/master/src/assets/envshell/dock.mp4" autoplay loop muted class="envshell-screenshot" onclick="this.play()"></video>
				</div>
			</div>
		</div>
		<h1 className="font-mono text-[2em] text-white font-bold">FAQ <i class="fa fa-question-circle"></i></h1>
		<div id="envshell-faq">
			<div class="envshell-faq-question">
				<div class="envshell-faq-question-title">What is envShell? <i class="fa fa-question-circle"></i></div>
				<div class="envshell-faq-question-content">
					envShell is a shell for Hyprland, designed with simplicity and aesthetics in mind. It tries to mimic the look and feel of the macOS Shell.
				</div>
			</div>
			<div class="envshell-faq-question">
				<div class="envshell-faq-question-title">Will it support X11? <i class="fa fa-brands fa-linux"></i></div>
				<div class="envshell-faq-question-content">
					No, envShell is designed to work only with Wayland and Hyprland.
					We currently have no plans to support X11.
				</div>
			</div>
			<div class="envshell-faq-question">
				<div class="envshell-faq-question-title">But is it open source? <i class="fa-solid fa-code"></i></div>
				<div class="envshell-faq-question-content">
					Yes, you can find the source code on <a href="https://github.com/E3nviction/envshell">GitHub</a>.
				</div>
			</div>
			<div class="envshell-faq-question">
				<div class="envshell-faq-question-title">I want to contribute. <i class="fa-solid fa-handshake-angle"></i></div>
				<div class="envshell-faq-question-content">
					You can contribute to the project on <a href="https://github.com/E3nviction/envshell">GitHub</a>.
				</div>
			</div>
			<div class="envshell-faq-question">
				<div class="envshell-faq-question-title">Does it support my distro? <i class="fa-solid fa-database"></i></div>
				<div class="envshell-faq-question-content">
					envShell is designed to work with any Linux distribution that supports Wayland and Hyprland.
					However, we recommend using NixOS or Arch Linux, for the best experience.
				</div>
			</div>
			<div class="envshell-faq-question">
				<div class="envshell-faq-question-title">How can I costumize it? <i class="fa-solid fa-paintbrush"></i></div>
				<div class="envshell-faq-question-content">
					envShell is designed to be highly customizable. You can change the widgets, modules, and behavior of the shell using the config file.
					You can find the config file in your home directory under <code>~/.config/envshell/config.toml</code>.
				</div>
			</div>
			<div class="envshell-faq-question">
				<div class="envshell-faq-question-title">I want a feature. <i class="fa-solid fa-lightbulb"></i></div>
				<div class="envshell-faq-question-content">
					You can suggest a feature on <a href="https://github.com/E3nviction/envshell/issues">GitHub</a>.
				</div>
			</div>
			<div class="envshell-faq-question">
				<div class="envshell-faq-question-title">Will it support Windows? <i class="fa-brands fa-windows"></i></div>
				<div class="envshell-faq-question-content">
					No.
				</div>
			</div>
			<div class="envshell-faq-question">
				<div class="envshell-faq-question-title">Will it support other WMs? <i class="fa fa-question-circle"></i></div>
				<div class="envshell-faq-question-content">
					We are not planning to support other Window Managers.
				</div>
			</div>
		</div>
		<div class="envshell-screenshot-wrapper">
			<h1>Screenshots</h1>
			<div class="envshell-screenshot-container">
				<div class="envshell-screenshot-container-image">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-3.png" alt="Screenshot 3" class="envshell-screenshot" />
					<p>Abstract Wallpaper</p>
				</div>
				<div class="envshell-screenshot-container-image">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-4.png" alt="Screenshot 4" class="envshell-screenshot" />
					<p>Flower pattern Wallpaper</p>
				</div>
				<div class="envshell-screenshot-container-image">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-5.png" alt="Screenshot 5" class="envshell-screenshot" />
					<p>Fish Wallpaper</p>
				</div>
				<div class="envshell-screenshot-container-image">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-6.png" alt="Screenshot 6" class="envshell-screenshot" />
					<p>Miniature Bonsai Wallpaper</p>
				</div>

				<div class="envshell-screenshot-container-image">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-7.png" alt="Screenshot 7" class="envshell-screenshot" />
					<p>Organic Paper</p>
				</div>
				<div class="envshell-screenshot-container-image">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-8.png" alt="Screenshot 8" class="envshell-screenshot" />
					<p>Mercury</p>
				</div>
				<div class="envshell-screenshot-container-image">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-9.png" alt="Screenshot 9" class="envshell-screenshot" />
					<p>Miniature Village</p>
				</div>
				<div class="envshell-screenshot-container-image">
					<img src="https://raw.githubusercontent.com/E3nviction/envshell/refs/heads/master/assets/screenshot-10.png" alt="Screenshot 10" class="envshell-screenshot" />
					<p>A Journey to Remember</p>
				</div>
			</div>
		</div>
	</div>
  );
}

export default Envshell;