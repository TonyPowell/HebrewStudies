#from pygame import mixer  # Load the popular external library
#from pygame import event
import pygame 

HEBREW_AUDIO = 'C:\\Python\\v35\\Scripts\\Hebrew\\Media\\'
#pygame.init()
pygame.mixer.init()
 
pygame.mixer.music.load(HEBREW_AUDIO + 'books_forvo_noamika.mp3')
#pygame.mixer.music.load(HEBREW_AUDIO + 'weather_in_hebrew.wav')
pygame.mixer.music.play()


"""
effect = mixer.Sound('weather_in_hebrew.wav')
effect.play() 
"""
