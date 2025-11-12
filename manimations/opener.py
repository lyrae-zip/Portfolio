from manim import *

class Opener(Scene):
    def construct(self):
        # Text.set_default(color=BLACK)
        # self.camera.background_color = WHITE
        text=Text(
            "Hello, \nI am Luna Miles"
        )
        self.play(Write(text))

        self.wait()