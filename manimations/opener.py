from manim import *

class Opener(Scene):
    def construct(self):
        # Text.set_default(color=BLACK)
        backgroundcolor = ManimColor("#1b212c")
        self.camera.background_color = backgroundcolor
        
        text=Text(
            "Questions?",
            font="montserrat",
            font_size="140"
        )
        self.play(Write(text))

        self.wait()