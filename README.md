Left side legs

Y1: max(0, -sin(frame / 10)) * 0.2   
Z1: cos(frame / 10) * 0.8            

Y2: max(0, -sin(frame / 10)) * 0.2
Z2: sin(frame / 10) * 0.8

Head Shake

(sin(frame * 0.4) * (sin(((frame % 100) / 50) * 3.14159) ** 2) * 0.05) if (frame % 100) < 50 else 0