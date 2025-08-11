#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define MAX_LINES 100
#define MAX_LABELS 50

// Structure for Symbol Table (Labels)
struct Symbol {
    char label[20];
    int address;
} symbolTable[MAX_LABELS];

int symbolCount = 0;
int locationCounter = 0;

// Instruction Set (Simple)
typedef struct {
    char mnemonic[10];
    char opcode[10];
} Instruction;

Instruction instructions[] = {
    {"LOAD", "01"},
    {"STORE", "02"},
    {"ADD", "03"},
    {"SUB", "04"},
    {"JMP", "05"},
    {"HALT", "FF"}
};

// Function to get opcode
char* getOpcode(char *mnemonic) {
    for (int i = 0; i < 6; i++) {
        if (strcmp(mnemonic, instructions[i].mnemonic) == 0) {
            return instructions[i].opcode;
        }
    }
    return NULL;
}

// Function to add label to Symbol Table
void addLabel(char *label, int address) {
    strcpy(symbolTable[symbolCount].label, label);
    symbolTable[symbolCount].address = address;
    symbolCount++;
}

// Function to get label address
int getLabelAddress(char *label) {
    for (int i = 0; i < symbolCount; i++) {
        if (strcmp(symbolTable[i].label, label) == 0) {
            return symbolTable[i].address;
        }
    }
    return -1;
}

// SINGLE PASS ASSEMBLER FUNCTION
void singlePassAssembler(char lines[MAX_LINES][50], int lineCount) {
    printf("\nMachine Code Output:\n");

    for (int i = 0; i < lineCount; i++) {
        char *token = strtok(lines[i], " ");

        // If line contains a label
        if (token[strlen(token) - 1] == ':') {
            token[strlen(token) - 1] = '\0';  // Remove ':'
            addLabel(token, locationCounter);
            token = strtok(NULL, " ");
        }

        if (token != NULL) {
            char *opcode = getOpcode(token);
            if (opcode != NULL) {
                printf("%s ", opcode);
                token = strtok(NULL, " ");

                if (token != NULL) {
                    int address = getLabelAddress(token);
                    if (address != -1) {
                        printf("%02d\n", address);
                    } else {
                        printf("%s\n", token);
                    }
                } else {
                    printf("00\n");
                }
                locationCounter++;
            }
        }
    }
}

// MAIN FUNCTION
int main() {
    char lines[MAX_LINES][50] = {
        "START:",
        "LOAD A",
        "ADD B",
        "STORE C",
        "JMP START",
        "HALT"
    };
    int lineCount = 6;

    printf("Single-Pass Assembler Processing...\n");
    singlePassAssembler(lines, lineCount);

    return 0;
}