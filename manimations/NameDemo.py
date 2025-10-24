from manim import *

class possible2(Scene):
    def construct(self):
        phase = ValueTracker(0)
        def bottom():
            return VMobject().add_points_as_corners(
                [
                    *[[x,0.5*np.sin(x-phase.get_value()),0] for x in np.linspace(-8,8,1000)],
                    [8,-8,0],[-8,-8,0],[-8,0,0]
                ]
            ).reverse_direction()
        

        text = Text("COOL TEXT", font_size=120)
        object = Square().rotate(45*DEGREES).move_to([0,-3,0])

        wave = always_redraw(lambda:
            Union(
                bottom(),
                object.move_to([0,-3+0.5*phase.get_value(),0])
            ).set_stroke(width=3,color=WHITE).set_fill(opacity=0)
        )
        self.add(wave)
        self.play(
            phase.animate.set_value(4*PI), run_time=4, rate_func=rate_functions.linear
        )
        self.wait()