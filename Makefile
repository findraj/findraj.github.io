all: clean pack

clean:
	rm -f xfindr01.zip

pack:
	zip -r xfindr01 . -x "*.git*"